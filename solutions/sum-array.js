// Solution for challenge: Soma Array
// Instructions: Implemente sumArray(arr) somando números.
export function sumArray(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, n) => acc + Number(n || 0), 0);
}
