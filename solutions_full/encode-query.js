// Solution for challenge: Query encoder
// Instructions: Implemente encodeQuery(obj) retornando pares ordenados por chave.
export function encodeQuery(obj) {
  if (!obj || typeof obj !== 'object') return '';
  const entries = Object.keys(obj).sort().map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`);
  return entries.filter(Boolean).join('&');
}
