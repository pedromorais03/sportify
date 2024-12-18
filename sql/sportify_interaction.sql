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
-- Table structure for table `interaction`
--

DROP TABLE IF EXISTS `interaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interaction` (
  `id_interaction` int NOT NULL AUTO_INCREMENT,
  `type` varchar(50) DEFAULT NULL,
  `fk_user` int DEFAULT NULL,
  `dt_interaction` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_interaction`),
  KEY `fk_user_interaction` (`fk_user`),
  CONSTRAINT `fk_user_interaction` FOREIGN KEY (`fk_user`) REFERENCES `user_data` (`id_user`),
  CONSTRAINT `interaction_chk_1` CHECK ((`type` in (_utf8mb4'post',_utf8mb4'recipe',_utf8mb4'game',_utf8mb4'like',_utf8mb4'comment')))
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interaction`
--

LOCK TABLES `interaction` WRITE;
/*!40000 ALTER TABLE `interaction` DISABLE KEYS */;
INSERT INTO `interaction` VALUES (1,'recipe',27,'2024-11-28 22:51:32'),(2,'game',27,'2024-11-29 22:32:39'),(3,'game',27,'2024-12-01 23:06:23'),(4,'game',27,'2024-12-06 01:04:13'),(5,'recipe',27,'2024-12-06 01:26:22'),(6,'post',27,'2024-12-07 00:05:09'),(7,'recipe',27,'2024-12-07 00:06:56'),(8,'recipe',27,'2024-12-07 13:57:20'),(9,'post',27,'2024-12-08 18:36:31'),(10,'post',27,'2024-12-08 18:36:46'),(11,'post',27,'2024-12-08 18:55:23');
/*!40000 ALTER TABLE `interaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-08 19:41:15
