// const fs = require('fs');
// const file = fs.createWriteStream('./big.file');

// for (let index = 0; index < 1e6; index++) {
//   file.write(
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
//   );
// }

// file.end();
(async () => {
  console.time('object');
  try {
    const timeout = () => new Promise(() => setTimeout(() => console.timeEnd('object'), 5000));
    
    await timeout()
  } catch (error) {
    console.error(error);
  }
})();
