export const splitByLines = (text: string) => {
  const regex = /\r?\n/
  const newText = text.split(regex)
  return newText
}
