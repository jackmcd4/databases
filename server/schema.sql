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

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` INTEGER(255) NULL AUTO_INCREMENT DEFAULT NULL,
  `username` CHAR(30) NULL DEFAULT 'Anonymous',
  PRIMARY KEY (`user_id`)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `message_id` BIGINT NULL AUTO_INCREMENT DEFAULT NULL,
  `author` INTEGER NULL DEFAULT NULL,
  `message` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`message_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (author) REFERENCES `users` (`user_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`user_id`,`username`) VALUES
-- ('','');
-- INSERT INTO `messages` (`message_id`,`author`,`message`) VALUES
-- ('','','');



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
