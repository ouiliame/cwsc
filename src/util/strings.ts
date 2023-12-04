export function isSnakeCase(s: string): boolean {
  return /^(#|\$)?[a-z]+(_[a-z]+)*$/.test(s);
}

export function isPascalCase(s: string): boolean {
  return /^(#|\$)?[A-Z][a-zA-Z]*$/.test(s);
}

export function isCapitalSnake(s: string): boolean {
  return /^[A-Z]+(_[A-Z]+)*$/.test(s);
}

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
