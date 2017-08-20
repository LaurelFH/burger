/*•	Create the burgers_db.
•	Switch to or use the burgers_db.
•	Create a burgers table with these fields:
o	id: an auto incrementing int that serves as the primary key.
o	burger_name: a string.
o	devoured: a boolean.
o	date: a TIMESTAMP.
*/

DROP DATABASE IF EXSITS burgers_db;

CREATE DATABASE burgers_db;


CREATE TABLE burgers(

 id: INT (50) AUTO_INCREMENT NOT NULL, 
 burger_name: VARCHAR (50) NOT NULL, 
 devoured: boolean NOT NULL, 
 date: CURRENT TIMESTAMP NOT NULL, 
 PRIMARY KEY (id)
);


SELECT * FROM burgers_db;