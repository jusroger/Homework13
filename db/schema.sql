CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  eaten boolean,
  PRIMARY KEY(id)
);
