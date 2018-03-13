export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export const randomItem = array => {
  return array[getRandomInt(array.length)]
}
