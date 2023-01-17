function Main(moves) {
  let gameBoard = [
    [false, false, false],

    [false, false, false],

    [false, false, false],
  ];

  let currentPlayerMove = "X";
  let playerWon = false;
  for (let i = 0; i < moves.length; i++) {
    if (playerWon !== false) {
      break;
    }
    let move = moves[i].split(" ").map(Number);
    if (gameBoard[move[0]][move[1]] === false) {
      gameBoard[move[0]][move[1]] = currentPlayerMove;
      currentPlayerMove === "X"
        ? (currentPlayerMove = "O")
        : (currentPlayerMove = "X");
    } else {
      for (const row of gameBoard) {
        console.log(row.join("\t"));
      }
      console.log("This place is already taken. Please choose another!");
    }
    HasGameEnded();
  }
  playerWon !== false
    ? console.log(`Player ${playerWon} wins!`)
    : console.log("The game ended! Nobody wins :(");
  for (const row of gameBoard) {
    console.log(row.join("\t"));
  }
  function HasGameEnded() {
    for (let row = 0; row < gameBoard.length; row++) {
      for (let col = 0; col < gameBoard[row].length; col++) {
        if (
          gameBoard[row + 1] !== undefined &&
          gameBoard[row][col] === gameBoard[row + 1][col] &&
          gameBoard[row + 2] !== undefined &&
          gameBoard[row][col] === gameBoard[row + 2][col]
        ) {
          playerWon = gameBoard[row][col];
          break;
        }
        if (
          gameBoard[row] !== undefined &&
          gameBoard[row][col] === gameBoard[row][col + 1] &&
          gameBoard[row][col + 2] !== undefined &&
          gameBoard[row][col] === gameBoard[row][col + 2]
        ) {
          playerWon = gameBoard[row][col];
          break;
        }
        if (
          gameBoard[row + 1] !== undefined &&
          gameBoard[row][col] === gameBoard[row + 1][col + 1] &&
          gameBoard[row + 2] !== undefined &&
          gameBoard[row][col] === gameBoard[row + 2][col + 2]
        ) {
          playerWon = gameBoard[row][col];
          break;
        }
        if (
          gameBoard[row + 1] !== undefined &&
          gameBoard[row][col] === gameBoard[row + 1][col - 1] &&
          gameBoard[row + 2] !== undefined &&
          gameBoard[row][col] === gameBoard[row + 2][col - 2]
        ) {
          playerWon = gameBoard[row][col];
          break;
        }
      }
      if (playerWon !== false) {
        break;
      }
    }
  }
}

Main(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
