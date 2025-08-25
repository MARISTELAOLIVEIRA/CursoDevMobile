// Solution for challenge: Mascarar segredo
// Instructions: Implemente mask(secret) exibindo apenas 2 primeiros chars.
export function mask(secret) {
  if (secret == null) return '';
  const s = String(secret);
  if (s.length <= 2) return s;
  return s.slice(0,2) + '*'.repeat(s.length - 2);
}
