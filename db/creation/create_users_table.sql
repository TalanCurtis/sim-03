create table if not exists s3_users (
    id serial primary key,
    user_name text,
    img text,
    auth_id text
)