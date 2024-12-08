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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (21,'Strogonoff fit com batata-doce','1/2 peito de frango, pimenta-do-reino a gosto, 1 fio de azeite, 1/2 cebola, 1 xícara de\nmolho de tomate, 1 tomate, 1 batata-doce, 1 copo de iogurte natural','Um strogonoff delicioso e com baixa caloria','Tempere o frango, refogue com cebola, tomate e molho; adicione iogurte, cozinhe batata-doce, tempere com sal e alecrim, doure e sirva com strogonoff.',27,'2024-11-28 22:50:41'),(26,'Mousse de Abacate com Cacau',' 1 abacate maduro, 3 colheres (sopa) de cacau em pó, 2 colheres (sopa) de mel, 1 colher (chá) de extrato de baunilha.','','Bata todos os ingredientes no liquidificador até ficar cremoso e leve à geladeira por 1 hora.',27,'2024-12-06 01:26:22'),(27,'Brownie Fit de Batata-Doce','1 xícara de batata-doce amassada, 2 colheres (sopa) de cacau em pó, 1/4 xícara de açúcar mascavo, 2 claras, 1/4 xícara de farinha de aveia, 1 colher (chá) de fermento.','Um delicioso brownie','Misture todos os ingredientes, coloque em uma forma untada e asse a 180°C por 25 minutos.',27,'2024-12-07 00:06:56'),(28,'Crepioca com Frango e Cottage','2 colheres (sopa) de goma de tapioca, 1 ovo, 100g de frango desfiado, 2 colheres (sopa) de cottage, sal e temperos a gosto.','','Misture o ovo com a tapioca, faça a massa em frigideira antiaderente, recheie com o frango e o cottage e dobre ao meio.',27,'2024-12-07 13:57:20');
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

-- Dump completed on 2024-12-08 19:41:15
