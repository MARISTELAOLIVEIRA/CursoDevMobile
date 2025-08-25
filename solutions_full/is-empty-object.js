// Solution for challenge: Objeto vazio
// Instructions: Implemente isEmptyObject(o) retornando true se não há chaves próprias.
export function isEmptyObject(o) {
  if (o == null || typeof o !== 'object') return true;
  return Object.keys(o).length === 0;
}
