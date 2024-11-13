const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(`CLOG in "", value "err"`, err);

    return;
  }

  const first = result;

  readFile('./content/second.txt', 'utf8', (err2, result2) => {
    if (err) {
      console.log(`CLOG in "", value "err2"`, err2);

      return;
    }

    const second2 = result2;

    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first} ${second2}`,
      (err, result) => {
        if (err) {
          console.log(`CLOG in "in writing result file async", value "err"`, err);

          return;
        }

        console.log(`CLOG in "in writing result file async", value "result"`, result);
      }
    );
  });
});
