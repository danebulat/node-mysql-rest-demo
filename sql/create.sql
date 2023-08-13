-- create database
CREATE DATABASE IF NOT EXISTS node_mysql_crud_demo_db;
USE node_mysql_crud_demo_db;

-- create table
CREATE TABLE IF NOT EXISTS users (
  `id`          INT(11) NOT NULL AUTO_INCREMENT,
  `first_name`  VARCHAR(255) NOT NULL,
  `last_name`   VARCHAR(255) NOT NULL,
  `email`       VARCHAR(255) NOT NULL,
  `dob`         DATE NULL,
  `dept`        VARCHAR(255) NULL,
  `created_at`  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`  DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(`id`)
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;
