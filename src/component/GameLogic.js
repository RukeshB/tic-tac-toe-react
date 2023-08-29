const checkWinner = (value) => {
  const winLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let logic of winLogic) {
    const [a, b, c] = logic;

    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      return value[a];
    }
  }

  return null;
};

export { checkWinner };
