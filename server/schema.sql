CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

-- LIST OF ATTRIBUTES
-- NOT NULL - Each row must contain a value for that column, null values are not allowed
-- DEFAULT value - Set a default value that is added when no other value is passed
-- UNSIGNED - Used for number types, limits the stored data to positive numbers and zero
-- AUTO INCREMENT - MySQL automatically increases the value of the field by 1 each time a new record is added
-- PRIMARY KEY - Used to uniquely identify the rows in a table. The column with PRIMARY KEY setting is often an ID number, and is often used with AUTO_INCREMENT

-- Each table must have a primary key column and every value in that column must be unique

-- CREATE TABLE tablename(
--   columnName dataType list, Of, Attributes
-- );


DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INTEGER(255) NULL AUTO_INCREMENT DEFAULT NULL,
  username CHAR(30) NULL DEFAULT 'Anonymous',
  PRIMARY KEY (user_id)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  message_id BIGINT NULL AUTO_INCREMENT DEFAULT NULL,
  author INTEGER NULL DEFAULT NULL,
  message VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (message_id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE messages ADD FOREIGN KEY (author) REFERENCES users (user_id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`user_id`,`username`) VALUES
-- (,'');
-- INSERT INTO `messages` (`message_id`,`author`,`message`) VALUES
-- ('','','');



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
