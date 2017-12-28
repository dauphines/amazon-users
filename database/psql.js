const inputs = require('../server/inputs.js');
const {getTrialEndDate} = require('../helpers/getTrialEndDate.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  database: 'test',
  dialect: 'postgres',
  username: 'abscura',
  password: null,
  operatorsAliases: Sequelize.Op,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('\x1b[32m----- SUCCESSFUL DATABASE CONNECTION -----\x1b[0m');
  })
  .catch(err => {
    console.error('\x1b[31m----- FAILED DATABASE CONNECTION -----\x1b[0m');
    console.error(err);
  });


/* -------------------- TABLE DEFINITION -------------------- */


const Users = sequelize.define('users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    contact_number: { type: Sequelize.STRING }
  },
  { timestamps: false }
);

const Addresses = sequelize.define('addresses',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    user_id: { type: Sequelize.STRING },
    full_name: { type: Sequelize.STRING },
    line_1: { type: Sequelize.STRING },
    line_2: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    zipcode: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING }
  },
  { timestamps: false }
);

const PrimeMemberships = sequelize.define('primememberships',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    user_id: { type: Sequelize.STRING },
    prime_status: { type: Sequelize.STRING },
    total_spend_trial_signup: { type: Sequelize.INTEGER },
    trial_signup_date: { type: Sequelize.DATEONLY },
    trial_end_date: { type: Sequelize.DATEONLY },
    prime_cancel_date: { type: Sequelize.DATEONLY }
  },
  { timestamps: false }
);

const PrimeRetentionAnalysis = sequelize.define('primeretentionanalysis',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    user_id: { type: Sequelize.STRING },
    total_spend_trial_signup: { type: Sequelize.INTEGER },
    trial_end_date: { type: Sequelize.DATEONLY },
    prime_retained: { type: Sequelize.BOOLEAN }
  },
  { timestamps: false }
);


/* -------------------- TABLE SYNC AND LOAD -------------------- */


Users.sync();
Addresses.sync();
PrimeMemberships.sync();
PrimeRetentionAnalysis.sync();

// Users
//   .bulkCreate(inputs.test_users)
//   .then()
//   .catch(err => {
//     console.log('\x1b[31m----- BULKCREATE ERROR : ', err, ' -----\x1b[0m');
//   });

// PrimeMemberships
//   .bulkCreate(inputs.test_users_memberships)
//   .then()
//   .catch(err => {
//     console.log('\x1b[31m----- BULKCREATE ERROR : ', err, ' -----\x1b[0m');
//   });

// Users
//   .upsert({
//     first_name: 'Vi',
//     last_name: 'Xi',
//     email: 'test@test.com',
//     contact_number: 18089876543
//   })
//   .then()
//   .catch(err => console.log(err));

/* -------------------- REGISTER NEW USER -------------------- */


const addAccount = (userObject, callback) => {
  let first_name = userObject.first_name;
  let last_name = userObject.last_name;
  let email = userObject.email;
  let number = userObject.contact_number;

  Users.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    contact_number: number
  })
    .then(data => {
      console.log('\x1b[32m----- SUCCESS : ROW CREATED -----\x1b[0m');
    })
    .catch(err => {
      console.log('\x1b[31m----- ERROR : addAccount -----\x1b[0m');
      console.log(err);
    });
};


/* -------------------- UPDATE USER TRIAL SIGNUP -------------------- */


const addTrialSignup = (userObject, callback) => {
  let user_id = userObject.user_id;
  let total_spend = userObject.total_spend_trial_signup;
  let signup_date = userObject.trial_signup_date;
  let end_date = getTrialEndDate(signup_date) || '';

  PrimeMemberships.create({
    user_id: user_id,
    prime_status: 'trial',
    total_spend_trial_signup: total_spend,
    trial_signup_date: signup_date,
    trial_end_date: end_date
  })
    .then(data => {
      console.log('\x1b[32m----- SUCCESS : ROW CREATED -----\x1b[0m');
    })
    .catch(err => {
      console.log('\x1b[31m----- ERROR : addTrialSignup -----\x1b[0m');
      console.log(err);
    });

  PrimeRetentionAnalysis.create({
    user_id: user_id,
    total_spend_trial_signup: total_spend,
    trial_end_date: end_date
  })
    .then(data => {
      console.log('\x1b[32m----- SUCCESS : ROW CREATED -----\x1b[0m');
    })
    .catch(err => {
      console.log('\x1b[31m----- ERROR : addTrialSignup -----\x1b[0m');
      console.log(err);
    });
};


/* -------------------- UPDATE USER TRIAL CANCEL -------------------- */


const updateTrialCancel = (userObject, callback) => {
  let user_id = userObject.user_id;
  let cancel_date = userObject.prime_cancel_date;

  PrimeMemberships.update(
    {
      prime_cancel_date: cancel_date,
      prime_status: null
    },
    { where: { id: user_id }
    })
    .then(data => {
      console.log('\x1b[32m----- SUCCESS : ROW UPDATED -----\x1b[0m');
    })
    .catch(err => {
      console.log('\x1b[31m----- ERROR : updateTrialCancel -----\x1b[0m');
      console.log(err);
    });
};


/* -------------------- UPDATE PRIME STATUS -------------------- */


const updatePrimeStatus = (userObject, callback) => {
  let user_id = userObject.user_id;

  PrimeMemberships.update(
    {
      prime_status: null
    },
    { where: { id: user_id }
    })
    .then(data => {
      console.log('\x1b[32m----- SUCCESS : ROW UPDATED -----\x1b[0m');
    })
    .catch(err => {
      console.log('\x1b[31m----- ERROR : updatePrimeStatus -----\x1b[0m');
      console.log(err);
    });
};


/* -------------------- EXPORTS -------------------- */


module.exports = {
  addAccount: addAccount,
  addTrialSignup: addTrialSignup,
  updateTrialCancel: updateTrialCancel,
  updatePrimeStatus: updatePrimeStatus
};
