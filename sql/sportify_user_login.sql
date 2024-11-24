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
-- Table structure for table `user_login`
--

DROP TABLE IF EXISTS `user_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_login` (
  `id_user_login` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fk_user_data` int DEFAULT NULL,
  PRIMARY KEY (`id_user_login`),
  KEY `fk_user_login` (`fk_user_data`),
  CONSTRAINT `fk_user_login` FOREIGN KEY (`fk_user_data`) REFERENCES `user_data` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login`
--

LOCK TABLES `user_login` WRITE;
/*!40000 ALTER TABLE `user_login` DISABLE KEYS */;
INSERT INTO `user_login` VALUES (1,'phmp','8271c2e4a66b941d298f2c06584ebdf1',1),(3,'teste','0480d047d72abbac2f4247331a6e9d36',6),(4,'padoru','53537f69499c1242427da45e6fd610a1',7),(5,'phmp2','7ac5227f05cf1da4cb57d364f1bd4315',8),(6,'phmp_teste','5bd2ebbd7caa00ddd73abc41df1ef90d',9),(7,'faelpavani','476448999879d3b7040f24d6a01839b7',10),(8,'lucao','7ff89b947eca279d9f89247ae440b306',11),(9,'romuler','8860af86c3df8112369a27dbf7e8e23f',12),(10,'caralho','5344ca5dbe860eaa64836bc5d590c288',13),(11,'caralhos','5344ca5dbe860eaa64836bc5d590c288',14),(12,'laiello','1b7ecef872aff3b8c1388f732c2b46e6',15),(13,'montinho','d658082ced4687cdaf1034d3431e71c3',16),(14,'teste','b9bb2af1b75e826fb82cedabd4f3fa8b',17),(15,'patrick','82b16ccc0dd27cc4405b74a4b71c0d7a',18),(16,'phmpTeste','698dc19d489c4e4db73e28a713eab07b',19),(17,'cassacoteste','7c6fec008d73e13293e302b39e5be057',20),(18,'PedroCrux','78ecfd6ef5582b748bace8c8c24db7e1',21),(19,'PHMorais','5bd2ebbd7caa00ddd73abc41df1ef90d',22),(20,'beagareno','31d080e46bf1e4ed71b3add1e3e3e4b9',23),(21,'cosezaoo','31d080e46bf1e4ed71b3add1e3e3e4b9',24),(22,'phmpereira','b44121bb916414ceff876f8412dfaa2c',25);
/*!40000 ALTER TABLE `user_login` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-24 19:49:15
