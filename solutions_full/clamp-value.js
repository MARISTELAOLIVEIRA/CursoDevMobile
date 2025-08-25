// Solution for challenge: Clamp
// Instructions: Implemente clamp(v,min,max).
export function clamp(v, min, max) {
  const x = Number(v), a = Number(min), b = Number(max);
  if (a > b) return clamp(v, b, a);
  return x < a ? a : x > b ? b : x;
}
