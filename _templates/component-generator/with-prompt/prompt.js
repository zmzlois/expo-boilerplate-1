// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, '../../../src/components');
const folders = fs.readdirSync(directoryPath, { withFileTypes: false });

module.exports = [
  {
    type: 'select',
    name: 'path',
    message: "Select the component's path: ",
    choices: folders
  },
  {
    type: 'input',
    name: 'name',
    message: "Insert the component's name (CamelCase): ",
  },
];
