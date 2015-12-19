CREATE DATABASE taylor_expo;

USE taylor_expo;

CREATE TABLE message (
    message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    content varchar(255)
);