// Solution for challenge: Merge Unique
// Instructions: Implemente mergeUnique(a,b) retornando array sem duplicatas.
export function mergeUnique(a, b) {
  const set = new Set([...(Array.isArray(a)?a:[]), ...(Array.isArray(b)?b:[])]);
  return Array.from(set);
}
