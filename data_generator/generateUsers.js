const faker = require('faker');
const fs = require('fs');
const logDataGeneration = require('./generateLog.js');
const stream = fs.createWriteStream('./data/data-users.csv', {'flags': 'a', 'encoding': null, 'mode': 0o666});

console.log('\x1b[36m -------- start ------- \x1b[0m');

stream.once('open', (fd) => {
  for (let id = 1; id <= 2500000; id++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let email = faker.internet.email();
    let contact_number = faker.phone.phoneNumberFormat();

    stream.write(`${id},${first_name},${last_name},${email},${contact_number}\n`);
    logDataGeneration(id);
  }

  stream.end();
  console.log('\x1b[36m -------- done -------- \x1b[0m');
});
