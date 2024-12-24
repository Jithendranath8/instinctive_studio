-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Course` VARCHAR(191) NOT NULL,
    `Cohort` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `DateJoined` DATETIME(3) NOT NULL,
    `LastLogin` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
