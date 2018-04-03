create table if not exists s3_users (
    id serial primary key,
    user_name text,
    img text,
    auth_id text,
    eye_color varchar(80),
    hair_color varchar(80),
    age int
)
-- update new user
update s3_users
set eye_color = 'brown' , hair_color = 'brown', age = 33;

-- insert other  users
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Joe', 'https://robohash.org/1', 'green', 'brown', 25);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Mike', 'https://robohash.org/2', 'blue', 'blond', 27);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Zoe', 'https://robohash.org/3', 'green', 'black', 35);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Phil', 'https://robohash.org/4', 'blue', 'brown', 22);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Tammy', 'https://robohash.org/5', 'brown', 'blond', 25);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Cobra', 'https://robohash.org/6', 'brown', 'brown', 23);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Lenny', 'https://robohash.org/7', 'green', 'black', 22);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Zip', 'https://robohash.org/8', 'brown', 'brown', 35);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Charles', 'https://robohash.org/9', 'red', 'brown', 33);
insert into s3_users
(user_name, img, eye_color, hair_color, age)
values('Fipp', 'https://robohash.org/10', 'green', 'red', 25);