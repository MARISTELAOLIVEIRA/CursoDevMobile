// Solution for challenge: Fila simples
// Instructions: Implemente push(queue,item) retornando novo array.
export function pushItem(queue, item) {
  return [...(Array.isArray(queue)?queue:[]), item];
}
