import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

/**
 * A module to get package informations from package.json
 * @module getPackageJson
 * @param {...string} keys from package.json if no arguments passed it returns package.json content as object
 * @returns {object} with given keys or content of package.json as object
 */

/**
 * Returns package info
 */
// Recreate __dirname for ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

const getPackageJson = function(...args) {
  const packageJSON = JSON.parse(readFileSync(join(__dirname, '../package.json')));
  if (!args.length) {
    return packageJSON;
  }
  return args.reduce((out, key) => {
    out[key] = packageJSON[key];
    return out;
  }, {});
};

export default getPackageJson;