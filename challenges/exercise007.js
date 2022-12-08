export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  return n
    .toString()
    .split("")
    .reduce((acc, num) => (acc += parseInt(num)), 0);
};

export const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  const arrayRange = [];
  if (!step) {
    step = 1;
  }
  for (let i = start; i <= end; i += step) {
    arrayRange.push(i);
  }
  return arrayRange;
};

export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  const screen_time = 100;
  return users
    .filter((user) =>
      user.screenTime.some(
        (screenTime) =>
          screenTime.date === date &&
          Object.values(screenTime.usage).reduce((acc, b) => acc + b, 0) >
            screen_time
      )
    )
    .map((user) => user.username);
};

export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  const red = parseInt(hexStr.slice(1, 3), 16);
  const green = parseInt(hexStr.slice(3, 5), 16);
  const blue = parseInt(hexStr.slice(5, 7), 16);
  return `rgb(${red},${green},${blue})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

  if (!board.length === 3) return null;
  if (!(board.filter((row) => row.length === 3).length === 3)) return null;

  board.forEach((row) => {
    row.forEach((square) => {
      if (!(square === "X" || square === "0" || square === null)) return null;
    });
  });
  const transpose = (board) =>
    board[0].map((col, i) => board.map((row) => row[i]));
  const boards = [board, transpose(board)];

  const players = ["X", "0"];
  let winner = null;
  players.forEach((player) => {
    boards.forEach((board) => {
      //check rows
      board.forEach((row) => {
        if (row.filter((square) => square === player).length === 3)
          winner = player;
      });
    });

    // check diagonals
    if (board[1][1] == player) {
      if (
        (board[0][0] === player && board[2][2] === player) ||
        (board[0][2] === player && board[2][0] === player)
      )
        winner = player;
    }
  });

  return winner;
};
