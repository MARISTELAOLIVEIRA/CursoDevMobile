// Solution for challenge: Cálculo simples
// Instructions: Implemente area(w,h) retornando w*h.
export function area(w, h) {
  const a = Number(w), b = Number(h);
  if (Number.isNaN(a) || Number.isNaN(b)) return NaN;
  return a * b;
}
