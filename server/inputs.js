/* -------------------- TEST USERS -------------------- */


const test_user_001 = {
  // user_id: 1,
  first_name: 'Michel',
  last_name: 'Wuckert',
  email: 'Curt.Schulist70@hotmail.com',
  contact_number: '901-641-4732'
};

const test_user_002 = {
  // user_id: 2,
  first_name: 'Arvel',
  last_name: 'MacGyver',
  email: 'Kristin.Hermann62@hotmail.com',
  contact_number: '985-748-1270'
};

const test_user_003 = {
  // user_id: 3,
  first_name: 'Lamar',
  last_name: 'Price',
  email: 'Gaylord_Waters59@gmail.com',
  contact_number: '570-691-4206'
};

const test_user_004 = {
  // user_id: 4,
  first_name: 'Elenor',
  last_name: 'Graham',
  email: 'Reba93@gmail.com',
  contact_number: '615-871-9148'
};

const test_user_005 = {
  // user_id: 5,
  first_name: 'Vita',
  last_name: 'Hoeger',
  email: 'Camren_Murray@gmail.com',
  contact_number: '590-566-9090'
};

const test_users = [
  test_user_001, test_user_002, test_user_003, test_user_004, test_user_005
];


/* -------------------- TEST MEMBERSHIPS -------------------- */


const test_user_001_membership = {
  user_id: 1,
  prime_status: null,
  total_spend_trial_signup: null,
  trial_signup_date: null,
  trial_end_date: null,
  prime_cancel_date: null
};

const test_user_002_membership = {
  user_id: 2,
  prime_status: null,
  total_spend_trial_signup: null,
  trial_signup_date: null,
  trial_end_date: null,
  prime_cancel_date: null
};

const test_user_003_membership = {
  user_id: 3,
  prime_status: null,
  total_spend_trial_signup: null,
  trial_signup_date: null,
  trial_end_date: null,
  prime_cancel_date: null
};

const test_user_004_membership = {
  user_id: 4,
  prime_status: null,
  total_spend_trial_signup: null,
  trial_signup_date: null,
  trial_end_date: null,
  prime_cancel_date: null
};

const test_user_005_membership = {
  user_id: 5,
  prime_status: null,
  total_spend_trial_signup: null,
  trial_signup_date: null,
  trial_end_date: null,
  prime_cancel_date: null
};

const test_users_memberships = [
  test_user_001_membership, test_user_002_membership, test_user_003_membership, test_user_004_membership, test_user_005_membership
];


/* -------------------- TEST SIGNUPS -------------------- */



const test_user_001_signup = {
  user_id: 1,
  total_spend_trial_signup: 51979,
  trial_signup_date: '2017-01-26 22:44:21.000000'
};
const test_user_002_signup = {
  user_id: 2,
  total_spend_trial_signup: 71194,
  trial_signup_date: '2017-10-23 04:45:58.000000'
};
const test_user_003_signup = {
  user_id: 3,
  total_spend_trial_signup: 40910,
  trial_signup_date: '2017-01-24 00:17:46.000000'
};
const test_user_004_signup = {
  user_id: 4,
  total_spend_trial_signup: 85107,
  trial_signup_date: '2017-06-26 05:59:31.000000'
};
const test_user_005_signup = {
  user_id: 5,
  total_spend_trial_signup: 86009,
  trial_signup_date: '2017-12-09 17:51:46.000000'
};

const test_users_signups = [
  test_user_001_signup, test_user_002_signup, test_user_003_signup, test_user_004_signup, test_user_005_signup
];


/* -------------------- TEST CANCELS -------------------- */


const test_user_003_cancel = {
  user_id: 3,
  prime_cancel_date: '2017-02-08 20:56:01.000000'
};
const test_user_004_cancel = {
  user_id: 4,
  prime_cancel_date: '2017-06-28 04:13:33.000000'
};
const test_user_005_cancel = {
  user_id: 5,
  prime_cancel_date: '2017-12-19 04:32:28.000000'
};

const test_users_cancels = [
  test_user_003_cancel, test_user_004_cancel, test_user_005_cancel
];


/* -------------------- EXPORTS -------------------- */


module.exports = {
  test_users: test_users,
  test_users_memberships: test_users_memberships,
  test_users_signups: test_users_signups,
  test_users_cancels: test_users_cancels,
  test_user_005_signup: test_user_005_signup,
  test_user_005_cancel: test_user_005_cancel
};
