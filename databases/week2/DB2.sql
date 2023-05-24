-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.email,user.name ,task.title FROM user
JOIN user_task ON (user.id=user_task.user_id)
JOIN task ON (user_task.task_id=task.id)
WHERE user.email LIKE '%@spotify.com%';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name,status.name,task.title
FROM user
JOIN user_task ON (user.id = user_task.user_id)
JOIN task ON (user_task.task_id = task.id)
JOIN status ON (task.status_id = status.id)
WHERE
status.name LIKE '%Not started%'
AND user.name LIKE 'Donald Duck';
