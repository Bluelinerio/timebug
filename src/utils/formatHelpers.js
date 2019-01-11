export const camelPad = str =>
  str
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, str => str.toUpperCase())
    .trim()

export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n)

