const faker = require('faker');
const fs = require('fs');
const logDataGeneration = require('./generateLog.js');
const stream = fs.createWriteStream('./data/data-memberships.csv', {'flags': 'a', 'encoding': null, 'mode': 0o666});

const prime_options = [null, 'trial', 'member'];

const calendar = {
  1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
};

const getEndMonth = (totalDays, startMonth) => {
  if (totalDays > calendar[startMonth]) {
    if (startMonth === 12) {
      return 1;
    } else {
      return startMonth + 1;
    }
  } else {
    return startMonth;
  }
};

const getEndDate = (totalDays, startMonth) => {
  if (totalDays === calendar[startMonth]) {
    return totalDays;
  } else {
    return totalDays - calendar[startMonth];
  }
};

const getTrialEndDate = (signupDate) => {
  const trialDays = 30;
  let startMonth = signupDate.getMonth() + 1;
  let startDate = signupDate.getDate();
  let totalDays = startDate + trialDays;
  let endMonth = getEndMonth(totalDays, startMonth);
  let endDate = getEndDate(totalDays, startMonth);

  return `${endMonth}/${endDate}/17`;
};

const randomizeCancelTrial = (signupDate, endDate) => {
  if (Math.random() * 100 <= 30) {
    return faker.date.between(signupDate, endDate);
  } else {
    return '';
  }
};

const removeTimeZone = (date) => {
  let time = date.toString();
  return time.slice(0, time.indexOf('G') - 1);
};

console.log('\x1b[36m -------- start ------- \x1b[0m');

stream.once('open', (fd) => {
  for (let id = 1; id <= 2500000; id++) {
    let prime_status = faker.helpers.randomize(prime_options);
    let total_spend_trial_signup = Math.floor(faker.finance.amount() * 100);
    let trial_signup_date = faker.date.between('01/01/17', '12/31/17');
    let trial_end_date = getTrialEndDate(trial_signup_date);
    let prime_canel_date = randomizeCancelTrial(trial_signup_date, trial_end_date);

    if (prime_canel_date !== '') {
      prime_canel_date = removeTimeZone(prime_canel_date);
    }

    trial_signup_date = removeTimeZone(trial_signup_date);

    stream.write(`${id},${id},${prime_status},${total_spend_trial_signup},${trial_signup_date},${trial_end_date},${prime_canel_date}\n`);
    logDataGeneration(id);
  }

  stream.end();
  console.log('\x1b[36m -------- done -------- \x1b[0m');
});
