export default function (field) {
  return field ? field.fields.file.url.replace('//', 'https://') : ''
}