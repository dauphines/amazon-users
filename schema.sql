-- use same table for primeMemberships and primeRetentionAnalysis
-- drop unneeded columns for primeRetentionAnalysis

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(32) NOT NULL,
  last_name VARCHAR(32) NOT NULL,
  email VARCHAR(64) NOT NULL,
  contact_number VARCHAR(16) NOT NULL
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER,
  full_name VARCHAR(64) NOT NULL,
  line_1 VARCHAR(100) NOT NULL,
  line_2 VARCHAR(100),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(6) NOT NULL,
  zip_code VARCHAR(16) NOT NULL,
  country VARCHAR(100) NOT NULL
);

CREATE TABLE primeMemberships (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER,
  prime_status VARCHAR(6),
  total_spend_trial_signup INTEGER,
  trial_signup_date TIMESTAMP WITH TIME ZONE,
  trial_end_date TIMESTAMP,
  prime_canel_date TIMESTAMP WITH TIME ZONE
);

CREATE TABLE primeRetentionAnalysis (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER,
  total_spend_trial_signup INTEGER NOT NULL,
  trial_end_date TIMESTAMP NOT NULL,
  prime_retained BOOLEAN NOT NULL
);

ALTER TABLE addresses
  ADD CONSTRAINT fk_addresses_users_id
  FOREIGN KEY (user_id)
  REFERENCES users (id);

ALTER TABLE primeMemberships
  ADD CONSTRAINT fk_primeMemberships_users_id
  FOREIGN KEY (user_id)
  REFERENCES users (id);

ALTER TABLE primeRetentionAnalysis
      ADD CONSTRAINT fk_primeRetentionAnalysis_users_id
      FOREIGN KEY (user_id)
      REFERENCES users (id);
