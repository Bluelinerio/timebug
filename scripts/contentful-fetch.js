import { refreshCMS, testContentFromCMS } from '../src/services/contentful'
const jsonfile = require('jsonfile')
const path = require('path')
const argv = require('yargs')
  .usage('Usage: $0 ')
  .example('$0 -f foo.jsson', 'count the lines in the given file')
  .alias('o', 'output')
  .nargs('f', 1)
  .describe('f', 'sets the output a file at path').argv

const fileName = path.resolve(__dirname, argv.output)

const writeJSONFile = content =>
  jsonfile.writeFile(fileName, content, err => {
    console.error(err ? err : 'success writing CMS data into ' + fileName)
  })

const justLog = content => {
  console.log('result: \n' + JSON.stringify(content))
  return content
}

refreshCMS()
  .then(testContentFromCMS)
  .then(justLog)
  .then(writeJSONFile)
  .catch(e => {
    console.log(e)
  })
