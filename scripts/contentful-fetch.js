#!/usr/bin/env node
import { refreshCMS, testContentFromCMS } from '../src/services/contentful';
const jsonfile = require('jsonfile');
const path = require('path');
const util = require('util');
const fs = require('fs');
const argv = require('yargs')
    .usage('Usage: $0 ')
    .example('$0 -f foo.jsson', 'count the lines in the given file')
    .alias('o', 'output')
    .nargs('f', 1)
    .describe('f', 'sets the output a file at path')
    .argv;

const jsonfilename = path.join(__dirname, argv.output)
const writeJSONFile = (content) => jsonfile.writeFile(jsonfilename, content, (err) => {
  console.error(err ? err : 'sucecss wriging CMS data into ' + jsonfilename)
})

const justLog = contnet => { console.log('result: \n' + JSON.stringify(contnet)); return contnet}

refreshCMS().then(testContentFromCMS).then(justLog).then(writeJSONFile)