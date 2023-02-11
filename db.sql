CREATE DATABASE IF NOT EXISTS todomaquina;

USE todomaquina 

CREATE TABLE clientes(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
  apellido VARCHAR(45) DEFAULT NULL,
  direccion VARCHAR(80) DEFAULT NULL,
  dni VARCHAR(15) DEFAULT NULL,
  telefonoUno VARCHAR(25) DEFAULT NULL,
  telefonodos VARCHAR(45) DEFAULT NULL,
  ciudad VARCHAR(20) DEFAULT NULL,
  provincia VARCHAR(15) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO clientes VALUES 
(1, 'franco', 'ljoka', 'santa cruz 1377', '37000593', '2613473601', null, 'guaymallén', 'Mendoza')
