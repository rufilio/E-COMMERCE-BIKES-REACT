export function toCapital(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return ''; // Manejo de caso vacío o no string
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }