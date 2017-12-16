CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(32) NOT NULL,
  last_name VARCHAR(32) NOT NULL,
  email VARCHAR(64) NOT NULL,
  contact_number VARCHAR(10) NOT NULL,
  trial_signup_date TIMESTAMP,
  trial_end_date TIMESTAMP,
  prime_canel_date TIMESTAMP,
  prime_status VARCHAR(10),
  totalSpendAtTrialStart INT
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

ALTER TABLE users
      ADD COLUMN default_address INTEGER,
      ADD CONSTRAINT fk_users_addresses_id
      FOREIGN KEY (default_address)
      REFERENCES addresses (id);

ALTER TABLE addresses
      ADD COLUMN user_id INTEGER,
      ADD CONSTRAINT fk_addresses_users_id
      FOREIGN KEY (user_id)
      REFERENCES users (id);
