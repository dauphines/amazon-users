const faker = require('faker');
const fs = require('fs');
let stream = fs.createWriteStream('./data/data-users.csv', {'flags': 'a', 'encoding': null, 'mode': 0o666});

console.log('\x1b[36m -------- start ------- \x1b[0m');

stream.once('open', (fd) => {
  for (let id = 1; id <= 2500000; id++) {
    var first_name = faker.name.firstName();
    var last_name = faker.name.lastName();
    var email = faker.internet.email();
    var contact_number = faker.phone.phoneNumberFormat();

    stream.write(`${id},${first_name},${last_name},${email},${contact_number}\n`);

    if (id === 1) {
      console.log(`\x1b[32m  . . line 000000${id} . . \x1b[0m`);
    } else if (id % 500000 === 0) {
      if (id < 1000000) {
        console.log(`\x1b[32m  . . line 0${id} . . \x1b[0m`);
      } else {
        console.log(`\x1b[32m  . . line ${id} . . \x1b[0m`);
      }
    }
  }

  stream.end();
  console.log('\x1b[36m -------- done -------- \x1b[0m');
});
