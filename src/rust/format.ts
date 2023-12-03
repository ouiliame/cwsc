import * as prettier from 'prettier';
import * as rustPlugin from 'prettier-plugin-rust';

export function formatRust(code: string): string {
  return prettier.format(code, {
    parser: 'jinx-rust',
    plugins: [rustPlugin],
    printWidth: 80,
    tabWidth: 2,
  });
}
