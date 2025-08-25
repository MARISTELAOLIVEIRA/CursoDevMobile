// Solution for challenge: Juntar path
// Instructions: Implemente joinPath(base, segment) garantindo apenas uma '/'.
export function joinPath(base, segment) {
  if (typeof base !== 'string') base = '';
  if (typeof segment !== 'string') segment = '';
  return `${base.replace(/\/+$/,'')}/${segment.replace(/^\/+/, '')}`;
}
