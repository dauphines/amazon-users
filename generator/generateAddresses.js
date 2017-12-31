const faker = require('faker');
const fs = require('fs');
const logDataGeneration = require('./generateLog.js');
const stream = fs.createWriteStream('./data/data-addresses.csv', {'flags': 'a', 'encoding': null, 'mode': 0o666});

console.log('\x1b[36m -------- start ------- \x1b[0m');

stream.once('open', (fd) => {
  for (let id = 1; id <= 2500000; id++) {
    let full_name = faker.name.findName();
    let line_1 = faker.address.streetAddress();
    let line_2 = faker.address.secondaryAddress();
    let city = faker.address.city();
    let state = faker.address.stateAbbr();
    let zip_code = faker.address.zipCode();
    let country = faker.address.country();

    if (country === 'Virgin Islands, U.S.' || country === 'Virgin Islands, British') {
      country = faker.address.country().replace(',', ' ');
    }

    stream.write(`${id},${id},${full_name},${line_1},${line_2},${city},${state},${zip_code},${country}\n`);
    logDataGeneration(id);
  }

  stream.end();
  console.log('\x1b[36m -------- done -------- \x1b[0m');
});
