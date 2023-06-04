DROP DATABASE IF EXISTS `meal_sharing`;
CREATE DATABASE IF NOT EXISTS `meal_sharing`;
USE `meal_sharing`;

CREATE TABLE `meal`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(50) NOT NULL,
`description` TEXT NOT NULL,
`location` VARCHAR(100) NOT NULL,
`when` DATETIME NOT NULL,
 `max_reservations` INT NOT NULL,
 `price` DECIMAL(3, 1) NOT NULL,
 `created_date` DATE DEFAULT(CURRENT_DATE) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reservation` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`number_of_guests` INT NOT NULL,
`meal_id` INT NOT NULL,
`created_date` DATE NOT NULL,
`contact_phonenumber` VARCHAR(20) NOT NULL,
`contact_email` varchar(30) NOT NULL,
CONSTRAINT `fk_reservation_meal` 
    FOREIGN KEY (`meal_id`) 
    REFERENCES `meal` (`id`)  
    ON DELETE CASCADE 
    ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `review` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(30) NOT NULL,
  `description` TEXT NOT NULL,
  `meal_id` INT NOT NULL,
  `stars` INT NOT NULL,
  `created_date` DATE DEFAULT(CURRENT_DATE) NOT NULL,
  CONSTRAINT `fk_review_meal` 
     FOREIGN KEY (`meal_id`) 
     REFERENCES `meal` (`id`)
     ON DELETE CASCADE ON 
     UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
