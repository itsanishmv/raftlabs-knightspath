export default function findPath(input) {
  const alphabets = "ABCDEFGH";
  const [x, y] = input;
  const axis = [
    [1, 2],
    [2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
    [-1, 2],
    [-2, 1],
  ];
  return axis
    .map(([a, b]) => {
      return `${alphabets[alphabets.indexOf(x) + a]}${+y + b}`;
    })
    .filter((value) => {
      return /^[a-h][1-8]$/i.test(value);
    });
}
