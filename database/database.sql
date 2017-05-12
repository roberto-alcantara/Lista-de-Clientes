drop database if exists client_list;
create database client_list;
use client_list;

create table client (
	id int not null auto_increment,
	cpf char(14) not null,
	sexo char(1) not null,
	nome varchar(50) not null,
	data_nascimento date not null,
	email varchar(50) not null,
	endereco varchar(40),
	cep char(9),
	bairro varchar(50),
	uf char(2),
	cidade varchar(50),
	telefone char(15),
	celular char(15),
	created_at date not null, 
	unique(cpf),
	unique(email),
	primary key (id)
);

create table foto_client (
	id_client int not null,
	foto mediumtext,
	foreign key (id_client) references client(id)
		on delete cascade
);