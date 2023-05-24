
HOMEWORK-WEEK1:-
-- Find out how many tasks are in the task table;
SELECT count(*) FROM task;
-- Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) FROM task WHERE due_date IS  NULL;
-- Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id LIKE 3;
-- Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id NOT LIKE 3;
-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task order by created  desc;
-- Get the single most recently created task
SELECT * FROM task order by created  desc limit 1;
-- Get the title and due date of all tasks where the title or description contains database
SELECT * FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';
-- Get the title and status (as text) of all tasks
SELECT task.title,status.name FROM task JOIN status ON task.status_id=status.id;
-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name,count(task.title) FROM task 
JOIN status ON task.status_id=status.id 
GROUP BY status.name 
ORDER BY count(task.title) desc;


CLASSWORK:-
-- Select the names and phones of all users;
SELECT name,phone FROM user;
-- Select the name of the user with id=10;
SElect name FROM user where id=10;
SElECT name FROM user where id=10;
-- Find how many users exist in the database;
select count(*) as total from user;
-- Select the names of the first 5 users in the database;
SELECT * FROM user order by id asc limit 5;
-- Select the names of the last 3 users in the database;
SELECT id, name, email, phone
FROM user
WHERE name IS NOT NULL AND id IS NOT NULL AND email IS NOT NULL AND phone IS NOT NULL  IS NOT NULL
ORDER BY id DESC
LIMIT 3;
-- Sum all the ids in the user table;
SELECT SUM(id) AS total_sum
FROM user;
-- Select all users and order them alphabetically by name;
select * from user order by name asc;
-- Find all tasks that include SQL either on the title or on the description;
SELECT *
FROM task
WHERE title LIKE '%SQL%' OR description LIKE '%SQL%';
-- Find the title of all tasks that the user Maryrose is responsible for;
select title from task where id= (select id from user where name like "Maryrose%");
SELECT task.title
FROM task
JOIN user ON task.id = user.id
WHERE user.name LIKE 'Maryrose%';
-- Find how many tasks each user is responsible for;
SELECT user.name, COUNT(task.id) as task_count FROM user
LEFT JOIN task ON user.id = task.user_id GROUP BY user.id;

