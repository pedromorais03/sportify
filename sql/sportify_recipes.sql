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
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id_recipe` int NOT NULL AUTO_INCREMENT,
  `name_recipe` varchar(100) DEFAULT NULL,
  `ingredients_recipes` varchar(1000) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `prep_method` varchar(1000) DEFAULT NULL,
  `fk_user` int DEFAULT NULL,
  `dt_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_recipe`),
  KEY `fk_user_recipe` (`fk_user`),
  CONSTRAINT `fk_user_recipe` FOREIGN KEY (`fk_user`) REFERENCES `user_data` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Teste','Teste ingrediente','Teste desc','Teste metodo',1,'2024-11-11 15:53:17'),(2,'Jabá do Romulo','Jaba, Romulo e Codeina','Um jaba bem gostoso que deixa relaxado','Pegue o jaba, pegue o romulo e misture com codeina',12,'2024-11-11 15:53:17'),(3,'AAA','cccc','BBBB','dddd',14,'2024-11-11 15:53:17'),(4,'testando2','teste ing2','teste desc2','teste metodo2',14,'2024-11-11 15:53:17'),(5,'teste pra ver toast','teste pra ver toast','teste pra ver toast','teste pra ver toast',14,'2024-11-11 15:53:17'),(6,'toast2','toast2','toast2','toast2',14,'2024-11-11 15:53:17'),(7,'farofa de macaco','macaco e farofa','uma fsarofa.','pegue o macaco e passe na farofa ',14,'2024-11-11 15:53:17'),(8,'farofa de macaco','macaco e farofa','uma fsarofa.','pegue o macaco e passe na farofa ',14,'2024-11-11 15:53:17'),(9,'farofa de macaco','macaco e farofa','uma fsarofa.','pegue o macaco e passe na farofa ',14,'2024-11-11 15:53:17'),(10,'jaba','jaba','jaba','jaba',14,'2024-11-11 15:53:17'),(11,'yogurt com granola','yogurt, whey e granola','yogurte delicio','JOGA DTUDO',14,'2024-11-11 15:53:17'),(12,'Brisadeiro','leite condenado\na verde\nmanteiga\ncacau 60%','Um brigadeiro alegre','faça um brigadeiro e adicione a verde',18,'2024-11-11 15:53:17'),(13,'file de mosquito','mosquito.','mosquito.','basta ler',21,'2024-11-11 15:53:17'),(14,'','','','',21,'2024-11-11 15:53:17'),(15,'','','','',21,'2024-11-11 15:53:17'),(16,'Brownie Fit','brownie e maconha','Brownie de maconha verde','faz o brownie e bota maconha',23,'2024-11-11 16:12:13'),(17,NULL,NULL,NULL,'teste',25,'2024-11-24 19:42:50'),(18,'abc','abc','abc','abc',25,'2024-11-24 19:45:16'),(19,'Batamn','batman','batamna','bataman',26,'2024-11-25 21:45:07'),(20,'aaa','aaa','aaa','aa',27,'2024-11-27 22:31:28'),(21,'Testadno','Apenas teste','testando procedure','testa',27,'2024-11-28 22:50:41');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 22:54:56
