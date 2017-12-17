CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(32) NOT NULL,
  last_name VARCHAR(32) NOT NULL,
  email VARCHAR(64) NOT NULL,
  contact_number VARCHAR(10) NOT NULL
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name VARCHAR(64) NOT NULL,
  line_1 VARCHAR(100) NOT NULL,
  line_2 VARCHAR(100),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip_code VARCHAR(16) NOT NULL,
  country VARCHAR(100) NOT NULL
);

CREATE TABLE primeMemberships (
  id SERIAL PRIMARY KEY NOT NULL,
  prime_status VARCHAR(6),
  trial_signup_date TIMESTAMP,
  trial_end_date TIMESTAMP,
  prime_canel_date TIMESTAMP,
  total_spend_trial_signup INT
);

CREATE TABLE primeRetentionAnalysis (
  id SERIAL PRIMARY KEY NOT NULL,
  trial_end_date TIMESTAMP NOT NULL,
  prime_retained BOOLEAN NOT NULL,
  total_spend_trial_signup INT NOT NULL
);

ALTER TABLE users
      ADD COLUMN primary_address INTEGER,
      ADD CONSTRAINT fk_users_addresses_id
      FOREIGN KEY (primary_address)
      REFERENCES addresses (id);

ALTER TABLE addresses
      ADD COLUMN user_id INTEGER,
      ADD CONSTRAINT fk_addresses_users_id
      FOREIGN KEY (user_id)
      REFERENCES users (id);

ALTER TABLE primeMemberships
      ADD COLUMN user_id INTEGER,
      ADD CONSTRAINT fk_primeMemberships_users_id
      FOREIGN KEY (user_id)
      REFERENCES users (id);

ALTER TABLE primeRetentionAnalysis
      ADD COLUMN user_id INTEGER,
      ADD CONSTRAINT fk_primeRetentionAnalysis_users_id
      FOREIGN KEY (user_id)
      REFERENCES users (id);
