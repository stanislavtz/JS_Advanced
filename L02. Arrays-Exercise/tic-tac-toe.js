function playGame(input = []){
    const gameBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    const playerSign = {
        firstPlayer: 'X',
        secondPlayer: 'O'
    }

    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        
        const row = +input[i].split(' ')[0];
        const col = +input[i].split(' ')[1];

        if (!gameBoard[row][col]) {
            gameBoard[row][col] = i % 2 === 0 ? playerSign.firstPlayer : playerSign.secondPlayer
            counter++;
            
            if(counter >= 5 && defineWinner(gameBoard[row][col], gameBoard)){
                console.log(defineWinner(gameBoard[row][col], gameBoard));
                break;
            }
        }
        else{
            console.log("This place is already taken. Please choose another!");
            input.splice(i, 1);
            i--;
        }
        
        if (counter === 9) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }
    
    function defineWinner(sign, gameBoard) {
        if ((gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2] && gameBoard[0][0])
         || (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0])
         || (gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0] && gameBoard[0][0])
         || (gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1] && gameBoard[0][1])
         || (gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2] && gameBoard[0][2])
         || (gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2] && gameBoard[1][0])
         || (gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2] && gameBoard[2][0])
         || (gameBoard[2][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[0][2] && gameBoard[2][0])) {

            return `Player ${sign} wins!`;
        }

        return null;
    }

    return gameBoard.forEach(element => console.log(element.join('\t')));
}