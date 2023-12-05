import * as fs from 'fs';
import * as path from 'path';

export async function readFile(file: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, text) => {
      if (err) {
        reject(err);
      }
      resolve(text);
    });
  });
}

export async function writeFile(file: string, text: string): Promise<void> {
  // recursively create directories if they don't exist
  return new Promise((resolve, reject) => {
    let dir = path.dirname(file);
    // create directory if it doesn't exist
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      }
      fs.writeFile(file, text, 'utf8', (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  });
}

export async function findFiles(
  cwd: string,
  pattern: RegExp,
  recursive: boolean = true
): Promise<string[]> {
  // recursively get all files that match the pattern
  let dir = path.resolve(cwd);
  return new Promise((resolve, reject) => {
    fs.readdir(dir, { recursive }, (err, files) => {
      if (err) {
        reject(err);
      }
      let matches: string[] = [];
      for (let file of files) {
        if (pattern.test(file.toString())) {
          matches.push(path.join(dir, file.toString()));
        }
      }
      resolve(matches);
    });
  });
}
