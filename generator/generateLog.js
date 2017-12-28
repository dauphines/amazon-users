module.exports = logDataGeneration = (line) => {
  if (line === 1) {
    console.log(`\x1b[32m  . . line 000000${line} . . \x1b[0m`);
  } else if (line % 500000 === 0) {
    if (line < 1000000) {
      console.log(`\x1b[32m  . . line 0${line} . . \x1b[0m`);
    } else {
      console.log(`\x1b[32m  . . line ${line} . . \x1b[0m`);
    }
  }

  return '----- data generation done -----';
};
