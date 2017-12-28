const calendar = {
  1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
};

const convertStrToDate = (signupDate) => {
  let date = new Date(signupDate);
  return date;
};

const getTrialEndDate = (signupDate) => {
  const trialDays = 30;
  let date = convertStrToDate(signupDate);
  let startMonth = date.getMonth() + 1;
  let startDay = date.getDate();
  let totalDays = trialDays + startDay;
  let endMonth = '';
  let endDay = totalDays - calendar[startMonth];

  if (endDay === 0) {
    if (startMonth === 12) {
      return '1/1/18';
    }
    return `${startMonth + 1}/1/17`;
  }

  if (startMonth === 1 && startDay > 29) {
    endDay = totalDays - startDay - 28;
    return `3/${endDay}/17`;
  }

  if (startMonth === 12 && startDay > 1) {
    return `1/${endDay}/18`;
  }

  return `${startMonth + 1}/${endDay}/17`;
};

module.exports.getTrialEndDate = getTrialEndDate;
