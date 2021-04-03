export function roundCurrency(num) {
  return (Math.ceil(100 * num) / 100).toFixed(2);
}