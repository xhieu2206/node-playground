const { readFile, writeFile } = require('fs');

const util = require('util');

const readFilePromise = util.promisify(readFile);

const writeFilePromise = util.promisify(writeFile);

// const readFilePromise = (filePath) => {
//   const promise = new Promise((res, rej) => {
//     readFile(
//       filePath,
//       'utf8',
//       (err, data) => {
//         console.log(data);
//
//         res(data);
//       },
//     );
//   });
//
//   return promise;
// }

const getText = (path) => {
  return new Promise((res, rej) => {
    readFile(
      path,
      'utf8',
      (err, data) => {
        if (err) {
          rej(err);

          return;
        }

        console.log(data);

        res(data);
      },
    );
  })
}

/* Promise
getText('./content/first.txt')
  .then(() => getText('./content/second.txt'))
  .then(() => getText('./content/third.txt'));
 */

const start = async () => {
  const first = await readFilePromise('./content/first.txt', 'utf8');

  console.log('Done reading first file', first);

  const second = await readFilePromise('./content/second.txt', 'utf8');

  await writeFilePromise(
    './content/result-mind-grenade.txt',
    `THIS IS AWESOME: ${first}${second}`,
  );

  console.log('Done reading second file', second);
}

start()
  .then(() => {
    console.log('Done!');
  });
