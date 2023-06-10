CREATE TABLE `participation` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `member` varchar(200) NOT NULL,
    `date` DATE NOT NULL,
    `start` varchar(200) NOT NULL,
    `end` varchar(200) NOT NULL
);