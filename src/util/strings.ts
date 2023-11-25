export function snakeToPascal(s: string): string {
  return s
    .split('_')
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join('');
}

export function pascalToSnake(s: string): string {
  // do not convert first character
  return s
    .split(/(?=[A-Z])/)
    .map((x) => x.toLowerCase())
    .join('_');
}
