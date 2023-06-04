USE `meal_sharing`;

MEAL:-
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO `meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES (1, 'sandwich', 'chicken, mozzarella, tomato', 'frederiksberg', '2023-09-02', 2, 90, '2023-05-20');

-- Get a meal with any id, e.g., id = 1
SELECT * FROM meal WHERE id = 1;

-- Update a meal with any id, e.g., id = 1. Update any attribute, e.g., the title or multiple attributes
UPDATE meal
SET title = 'spaghetti',
    description = 'egg and salad'
WHERE id = 1;

-- Delete a meal with any id, e.g., id = 1
DELETE FROM meal WHERE id = 1;


RESERVATION:-
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_email`)
VALUES (10, 1, CURDATE(), '71608218', 'benjamin@email.com');


REVIEW:-
-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('delicious', 'super delicious soup', 1, 5, '2023-03-20');

-- Get a review with any id, e.g., id = 1
SELECT * FROM review WHERE id = 1;

-- -- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
	review
SET
	title = 'super Delicious'
WHERE
	id = 1;

-- -- Delete a review with any id, fx 1
DELETE
FROM
	review
WHERE
	id = 1;

Additional queries:-
 -- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price < 200;

-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date between created_date AND NOW();

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 3;