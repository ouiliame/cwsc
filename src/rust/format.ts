import * as prettier from 'prettier';
import * as rustPlugin from 'prettier-plugin-rust';

export async function formatRust(code: string): Promise<string> {
  try {
    const result = await prettier.format(code, {
      parser: 'jinx-rust',
      plugins: [rustPlugin],
      printWidth: 80,
      tabWidth: 2,
    });
    return result;
  } catch (e) {
    // If formatting fails (e.g. invalid Rust), return unformatted code
    return code;
  }
}
