const jsonfile = require('jsonfile');
const moment = require('moment');
const git = require('simple-git');

const FILE_PATH = './data.json';

const DATE = moment().subtract(5, 'days').format();

const data = {
    data : DATE
}

jsonfile.writeFile(FILE_PATH, data, ()=>{
    git().add('.').commit(DATE, {'--date':DATE}).push('origin', 'main');
});