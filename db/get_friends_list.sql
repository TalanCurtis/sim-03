-- select * from s3_users
-- where id != $1
select * 
from s3_users
where id != $1 and id Not in 
(
select user_2
from s3_friends
where user_1 = $1
)