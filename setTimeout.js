console.log('First');

const promise = (text) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(text);

    resolve();
  }, 2000);
})

/* using callback
setTimeout(() => {
  console.log('Second');

  setTimeout(() => {
    console.log('Third');

    setTimeout(() => {
      console.log('Fourth');
    }, 1000)
  }, 1000)
}, 1000);
 */

// using promise
promise('Second')
  .then(() => promise('Third'))
  .then(() => promise('Four'))
  .then(() => promise('Five'))
