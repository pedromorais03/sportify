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
-- Temporary view structure for view `vw_user_data`
--

DROP TABLE IF EXISTS `vw_user_data`;
/*!50001 DROP VIEW IF EXISTS `vw_user_data`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_user_data` AS SELECT 
 1 AS `id_user`,
 1 AS `name_user`,
 1 AS `second_name_user`,
 1 AS `email_user`,
 1 AS `created_at`,
 1 AS `id_user_login`,
 1 AS `username`,
 1 AS `password`,
 1 AS `fk_user_data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_recipe_user`
--

DROP TABLE IF EXISTS `vw_recipe_user`;
/*!50001 DROP VIEW IF EXISTS `vw_recipe_user`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_recipe_user` AS SELECT 
 1 AS `id_recipe`,
 1 AS `name_recipe`,
 1 AS `ingredients_recipes`,
 1 AS `description`,
 1 AS `prep_method`,
 1 AS `fk_user`,
 1 AS `id_user`,
 1 AS `name_user`,
 1 AS `second_name_user`,
 1 AS `email_user`,
 1 AS `created_at`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vw_user_data`
--

/*!50001 DROP VIEW IF EXISTS `vw_user_data`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`pedro_morais`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_user_data` AS select `ud`.`id_user` AS `id_user`,`ud`.`name_user` AS `name_user`,`ud`.`second_name_user` AS `second_name_user`,`ud`.`email_user` AS `email_user`,`ud`.`created_at` AS `created_at`,`ul`.`id_user_login` AS `id_user_login`,`ul`.`username` AS `username`,`ul`.`password` AS `password`,`ul`.`fk_user_data` AS `fk_user_data` from (`user_data` `ud` join `user_login` `ul` on((`ul`.`fk_user_data` = `ud`.`id_user`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_recipe_user`
--

/*!50001 DROP VIEW IF EXISTS `vw_recipe_user`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`pedro_morais`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_recipe_user` AS select `r`.`id_recipe` AS `id_recipe`,`r`.`name_recipe` AS `name_recipe`,`r`.`ingredients_recipes` AS `ingredients_recipes`,`r`.`description` AS `description`,`r`.`prep_method` AS `prep_method`,`r`.`fk_user` AS `fk_user`,`ud`.`id_user` AS `id_user`,`ud`.`name_user` AS `name_user`,`ud`.`second_name_user` AS `second_name_user`,`ud`.`email_user` AS `email_user`,`ud`.`created_at` AS `created_at` from (`recipes` `r` join `user_data` `ud` on((`r`.`fk_user` = `ud`.`id_user`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Dumping events for database 'sportify'
--

--
-- Dumping routines for database 'sportify'
--
/*!50003 DROP PROCEDURE IF EXISTS `p_insert_data_login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`pedro_morais`@`%` PROCEDURE `p_insert_data_login`(
	IN name_user VARCHAR(50),
    IN second_name_user VARCHAR(50),
    IN email_user VARCHAR(100),
	IN username VARCHAR(100),
    IN password VARCHAR(255)
)
BEGIN
	DECLARE user_data_id INT;
	INSERT INTO user_data VALUES(default, name_user, second_name_user, email_user, default);
    SET user_data_id = LAST_INSERT_ID();
    INSERT INTO user_login VALUES(default, username, password, user_data_id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-24 19:49:15
