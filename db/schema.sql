CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers
(
  id INT AUTO_INCREMENT,
  burger_name VARCHAR (30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);