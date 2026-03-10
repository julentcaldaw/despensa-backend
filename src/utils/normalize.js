// utils/normalize.js

/**
 * Normaliza un nombre eliminando tildes, espacios extra y pasando a minúsculas.
 * @param {string} name
 * @returns {string}
 */
export function normalizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ');
}
