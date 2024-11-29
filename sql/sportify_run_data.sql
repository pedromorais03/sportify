-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sportify
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `run_data`
--

DROP TABLE IF EXISTS `run_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `run_data` (
  `id_run_data` int NOT NULL AUTO_INCREMENT,
  `score` decimal(10,2) DEFAULT NULL,
  `fk_user` int DEFAULT NULL,
  `fk_game` int DEFAULT NULL,
  `dt_run` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_run_data`),
  KEY `fk_user_run_data` (`fk_user`),
  KEY `fk_game_run_data` (`fk_game`),
  CONSTRAINT `fk_game_run_data` FOREIGN KEY (`fk_game`) REFERENCES `games` (`id_game`),
  CONSTRAINT `fk_user_run_data` FOREIGN KEY (`fk_user`) REFERENCES `user_data` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `run_data`
--

LOCK TABLES `run_data` WRITE;
/*!40000 ALTER TABLE `run_data` DISABLE KEYS */;
INSERT INTO `run_data` VALUES (1,10.00,22,1,'2024-11-11 16:05:51'),(2,3060.79,23,1,'2024-11-11 16:19:21'),(3,646.86,25,1,'2024-11-25 01:08:08'),(4,2677.22,26,1,'2024-11-25 21:46:56'),(5,3298.69,27,1,'2024-11-27 22:33:06');
/*!40000 ALTER TABLE `run_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 22:54:57
