SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema toys_to_swap
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema toys_to_swap
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `toys_to_swap` DEFAULT CHARACTER SET utf8 ;
USE `toys_to_swap` ;

-- -----------------------------------------------------
-- Table `toys_to_swap`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toys_to_swap`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(125) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `pseudo` VARCHAR(45) NULL,
  `zip` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toys_to_swap`.`charity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toys_to_swap`.`charity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `zip_code` INT NULL,
  `description` MEDIUMTEXT NULL,
  `image` VARCHAR(225) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toys_to_swap`.`toy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toys_to_swap`.`toy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `image` VARCHAR(225) NULL,
  `description` TINYTEXT NULL,
  `user_id` INT NOT NULL,
  `charity_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_toy_user_idx` (`user_id` ASC),
  INDEX `fk_toy_charity1_idx` (`charity_id` ASC),
  CONSTRAINT `fk_toy_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `toys_to_swap`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_toy_charity1`
    FOREIGN KEY (`charity_id`)
    REFERENCES `toys_to_swap`.`charity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toys_to_swap`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toys_to_swap`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(125) NULL,
  `description` MEDIUMTEXT NULL,
  `date` DATETIME NULL,
  `zip_code` INT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_event_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_event_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `toys_to_swap`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toys_to_swap`.`wish`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toys_to_swap`.`wish` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `toy_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_wish_user1_idx` (`user_id` ASC),
  INDEX `fk_wish_toy1_idx` (`toy_id` ASC),
  CONSTRAINT `fk_wish_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `toys_to_swap`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_wish_toy1`
    FOREIGN KEY (`toy_id`)
    REFERENCES `toys_to_swap`.`toy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toys_to_swap`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toys_to_swap`.`tag` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toys_to_swap`.`toy_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toys_to_swap`.`toy_tag` (
  `tag_id` INT NOT NULL,
  `toy_id` INT NOT NULL,
  INDEX `fk_toy_tag_tag1_idx` (`tag_id` ASC),
  PRIMARY KEY (`toy_id`),
  CONSTRAINT `fk_toy_tag_tag1`
    FOREIGN KEY (`tag_id`)
    REFERENCES `toys_to_swap`.`tag` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_toy_tag_toy1`
    FOREIGN KEY (`toy_id`)
    REFERENCES `toys_to_swap`.`toy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

