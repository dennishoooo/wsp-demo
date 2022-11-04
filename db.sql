create database "wsp-demo";

create table users (
  id serial primary key,
  username varchar(255) not null,
  password varchar(255) not null
)

insert into users(username, password) values ('ariel', 'ilovebeeno');

select * from users;