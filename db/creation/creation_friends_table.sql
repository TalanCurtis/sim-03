-- make friends table.
create table if not exists s3_friends (
    id serial primary key,
    user_1 int,
    user_2 int
)