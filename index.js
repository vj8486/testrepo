const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

const DATE = moment().subtract(1, 'd').format();

const data = {
    data : DATE
}

jsonfile.writeFile(FILE_PATH, data);
let count=0;

simpleGit().add([FILE_PATH, './index.js']).commit(DATE, {'--date': DATE}).push();