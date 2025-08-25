// Solution for challenge: Verificar versão Node
// Instructions: Implemente isSupported(v) retornando true se versão >= 18.
export function isSupported(v) {
  if (typeof v !== 'string') return false;
  const [maj] = v.split('.').map(n=>parseInt(n,10));
  return maj >= 18;
}
