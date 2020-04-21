function arena(array) {
    const pool = {};
    for (const str of array) {
        if (str === 'Ave Cesar') {
            const sortedPool = Object.keys(pool)
                .sort((a, b) => a.localeCompare(b))
                .sort((a, b) => pool[b].totalSkillPoints - pool[a].totalSkillPoints);

            sortedPool.forEach(name => {
                console.log(`${name}: ${pool[name].totalSkillPoints} skill`);

                const sortedSkills = Object.keys(pool[name].skills)
                    .sort((a, b) => a.localeCompare(b))
                    .sort((a, b) => pool[name].skills[b] - pool[name].skills[a]);

                sortedSkills.forEach(skill => {
                    console.log(`- ${skill} <!> ${pool[name].skills[skill]}`);
                });
            });

            break;
        }
        else if (str.includes('vs')) {
            const firstGrName = str.split(' ')[0];
            const secondGrName = str.split(' ')[2];

            if (pool[firstGrName] && pool[secondGrName]) {
                for (const skill of Object.keys(pool[firstGrName].skills)) {
                    if (Object.keys(pool[secondGrName].skills).includes(skill)) {
                        if (pool[firstGrName].totalSkillPoints >= pool[secondGrName].totalSkillPoints) {
                            delete pool[secondGrName];
                        }
                        else {
                            delete pool[firstGrName];
                        }

                        break;
                    }
                }
            }
        }
        else {
            const [gladiator, technique, skill] = str.split(' -> ');
            if (!pool.hasOwnProperty(gladiator)) {
                pool[gladiator] = {};
                pool[gladiator].totalSkillPoints = 0;
                pool[gladiator].skills = {};
            }

            if (!pool[gladiator].skills.hasOwnProperty(technique)) {
                pool[gladiator].skills[technique] = +skill;
                pool[gladiator].totalSkillPoints += +skill;
            }

            if (pool[gladiator].skills[technique] < skill) {
                pool[gladiator].totalSkillPoints -= pool[gladiator].skills[technique];
                pool[gladiator].skills[technique] = +skill;
                pool[gladiator].totalSkillPoints += +skill;
            }
        }
    }
}

arena(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius -> Support -> 350',
        'Gladius -> Heal -> 180',
        'Gladius vs Julius',
        'Gladius vs Gosho',
        'Ave Cesar',
        'Gladius -> Heal -> 580'
    ]
)