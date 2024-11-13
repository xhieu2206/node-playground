const os = require('os');

// info about current user
const user = os.userInfo();

console.log(`CLOG in "", value "user"`, user);

const path = require('path');

console.log(`CLOG in "", value "path"`, path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(`CLOG in "", value "base"`, base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(`CLOG in "", value "absolute"`, absolute);
