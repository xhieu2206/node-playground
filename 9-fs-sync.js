const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

const second = readFileSync('./content/second.txt', 'utf8');

console.log(`CLOG in "", value "first"`, first);

console.log(`CLOG in "", value "second"`, second);

writeFileSync('./content/result-sync.txt', `Hello this is the result created at ${new Date()} \n`, { flag: 'a' });

const result = readFileSync('./content/result-sync.txt', 'utf8');

console.log(`CLOG in "", value "result"`, result);
