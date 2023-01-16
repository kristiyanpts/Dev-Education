function Main(moves) {
  let gameBoard = [
    [false, false, false],

    [false, false, false],

    [false, false, false],
  ];

  let currentPlayerMove = "X";
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i].split(" ").map(Number);
    if (gameBoard[move[0]][move[1]] === false) {
      gameBoard[move[0]][move[1]] = currentPlayerMove;
      currentPlayerMove === "X"
        ? (currentPlayerMove = "O")
        : (currentPlayerMove = "X");
    } else {
      console.log(move);
      console.log("This place is already taken. Please choose another!");
    }
  }
  console.log(JSON.stringify(gameBoard));
}

Main(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
