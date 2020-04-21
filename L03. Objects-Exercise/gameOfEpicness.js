function solve(array, matrix) {
    const kingdoms = {}

    array.forEach(element => {
        if (!kingdoms.hasOwnProperty(element.kingdom)) {
            kingdoms[element.kingdom] = {};
            Object.defineProperty(kingdoms[element.kingdom], 'totalWins', { value: 0, enumerable: false, writable: true });
            Object.defineProperty(kingdoms[element.kingdom], 'totalLosses', { value: 0, enumerable: false, writable: true });
        }

        if (!kingdoms[element.kingdom].hasOwnProperty(element.general)) {
            kingdoms[element.kingdom][element.general] = {
                army: 0,
                wins: 0,
                losses: 0
            };
        }

        kingdoms[element.kingdom][element.general].army += element.army;
    });

    for (arr of matrix) {
        const [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = [...arr];

        if (attackingKingdom === defendingKingdom) {
            continue;
        }

        if (kingdoms[attackingKingdom][attackingGeneral].army > kingdoms[defendingKingdom][defendingGeneral].army) {
            calulateGeneralsPoints(kingdoms[attackingKingdom][attackingGeneral], kingdoms[defendingKingdom][defendingGeneral]);
            calulateKingdomsTotalPoints(kingdoms[attackingKingdom], kingdoms[defendingKingdom]);
            calculateArmiesPoints(kingdoms[attackingKingdom][attackingGeneral], kingdoms[defendingKingdom][defendingGeneral]);
        }
        else if (kingdoms[attackingKingdom][attackingGeneral].army < kingdoms[defendingKingdom][defendingGeneral].army) {
            calulateGeneralsPoints(kingdoms[defendingKingdom][defendingGeneral], kingdoms[attackingKingdom][attackingGeneral]);
            calulateKingdomsTotalPoints(kingdoms[defendingKingdom],  kingdoms[attackingKingdom]);
            calculateArmiesPoints(kingdoms[defendingKingdom][defendingGeneral], kingdoms[attackingKingdom][attackingGeneral]);
        }
    }

    const sorted = Object.keys(kingdoms)
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => kingdoms[b].totalWins - kingdoms[a].totalWins)
        .sort((a, b) => kingdoms[a].totalLosses - kingdoms[b].totalLosses);

    const winnerKingdom = kingdoms[sorted[0]];

    const sortedWinner = Object.keys(winnerKingdom).sort((a, b) => winnerKingdom[b].army - winnerKingdom[a].army);

    console.log(`Winner: ${sorted[0]}`);
    for (const general of sortedWinner) {
        console.log(`/\\general: ${general}`);
        for (const key in winnerKingdom[general]) {
            console.log(`---${key}: ${winnerKingdom[general][key]}`);
        }
    }

    function calulateGeneralsPoints(winner, loser) {
        winner.wins++;
        loser.losses++;
    }

    function calulateKingdomsTotalPoints(winner, loser) {
        winner.totalWins++;
        loser.totalLosses++;
    }

    function calculateArmiesPoints(winner, loser) {
        winner.army = Math.floor(winner.army * 1.1);
        loser.army = Math.floor(loser.army * 0.9);
    }
}

solve(
    [
        { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 }

    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
    ]
)