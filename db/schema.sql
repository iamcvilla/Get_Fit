-- DROP DATABASE
DROP DATABASE IF EXISTS gf_db;

-- CREATE DATABASE
CREATE DATABASE gf_db;

-- DROP TABLE IF EXISTS user;
-- DROP TABLE IF EXISTS exercise;

-- CREATE TABLE user (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   email VARCHAR(50) NOT NULL,
--   password VARCHAR(20) NOT NULL
-- );

-- CREATE TABLE exercise_segment (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   segment_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE cardio (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   cardio_name VARCHAR(30) NOT NULL,
--   duration TIME NOT NULL,
--   distance INTEGER NOT NULL

-- );

-- CREATE TABLE stength (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   strength_name VARCHAR(30) NOT NULL,
--   strength_weight INTEGER NOT NULL,
--   strength_sets INTEGER NOT NULL,
--   strength_reps INTEGER NOT NULL
-- );