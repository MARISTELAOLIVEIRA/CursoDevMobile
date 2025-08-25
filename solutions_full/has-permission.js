// Solution for challenge: Checa permissão
// Instructions: Implemente hasPermission(list, p).
export function hasPermission(list, p) {
  if (!Array.isArray(list)) return false;
  return list.includes(p);
}
