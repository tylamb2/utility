var sqrt = Math.sqrt;

function add_two(x, y) {
  return x + y;
}
function square(x) {
  return x * x;
}
function diag(x, y) {
  return sqrt(square(x) + square(y));
}
module.exports = {
  sqrt: sqrt,
  square: square,
  diag: diag
};
