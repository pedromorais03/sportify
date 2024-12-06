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
-- Table structure for table `user_data`
--

DROP TABLE IF EXISTS `user_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_data` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `name_user` varchar(50) DEFAULT NULL,
  `second_name_user` varchar(50) DEFAULT NULL,
  `email_user` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_data`
--

LOCK TABLES `user_data` WRITE;
/*!40000 ALTER TABLE `user_data` DISABLE KEYS */;
INSERT INTO `user_data` VALUES (1,'Pedro','Henrique','pedromorais3012@gmail.com','2024-10-16 01:01:47'),(2,'pedro','morais','pedro@gmail.com','2024-10-16 20:17:44'),(3,'pedro','morais','meiremorais0@gmail.com','2024-10-16 20:19:14'),(4,'teste','steste','teste@teste.com','2024-10-16 20:22:07'),(5,'Maria','Morais','meiremorais0@gmail.com','2024-10-16 20:22:39'),(6,'Maria','Morais','meiremorais0@gmail.com','2024-10-16 20:24:47'),(7,'Lucas','Cartaxo','padoru@gmail.com','2024-10-17 22:17:24'),(8,'pedro','morais','pedro@gmail.com','2024-10-19 20:08:49'),(9,'Pedro','Morais','pedromorais3012@gmail.com','2024-10-19 20:46:22'),(10,'rafael','pavani','rafael@gmail.com','2024-10-21 09:32:07'),(11,'lucas','aiello','lucas@gmail.com','2024-10-21 09:34:21'),(12,'romulo','ciriaco','romulo@gmail.com','2024-10-21 10:04:34'),(13,'felipe','caralhos','caralhos@gmail.com','2024-10-21 10:13:07'),(14,'felipe','caralhos','caralhos@gmail.com','2024-10-21 10:13:42'),(15,'lucas','aiello','aiello@gmail.com','2024-10-23 09:33:40'),(16,'guilherme','montin','montin@gmail.com','2024-10-23 12:15:48'),(17,'teste','teste','teste@gmail.com','2024-10-23 15:44:33'),(18,'patrcik','lourenco','patrikc@gmail.com','2024-10-24 11:34:28'),(19,'Pedro Teste','Morais Teste','pteste@gmail.com','2024-10-24 12:39:05'),(20,'cassaco1','cassaco sobrenome','cassaco@gmail.com','2024-10-24 12:52:59'),(21,'Pedro','Cruz','pedroHenquecruz@gmial.com','2024-10-25 15:20:36'),(22,'Pedro','Morais','pedromorais3012@gmail.com','2024-11-11 15:51:51'),(23,'Bhreno','Venditti','bhreno12@gmail.com','2024-11-11 16:11:22'),(24,'gabriel','cose','cosearaujo@gmail','2024-11-11 16:21:09'),(25,'Pedro','Morais','pedromorais3012@gmail.com','2024-11-24 19:42:09'),(26,'Will','Wayne','batman@gmail.com','2024-11-25 21:44:36'),(27,'Pedro','Morais','pedromorais3012@gmail.com','2024-11-27 22:18:23');
/*!40000 ALTER TABLE `user_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-06  1:54:09
