/*
 Navicat MySQL Data Transfer

 Source Server         : 111
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : mysql-node

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 27/11/2020 14:55:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article1` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '唯一id',
  `title` varchar(50) DEFAULT NULL COMMENT '文章标题',
  `author` varchar(30) DEFAULT NULL COMMENT '文章作者',
  `content` text COMMENT '文章内容',
  `description` varchar(255) DEFAULT NULL COMMENT '文章简介',
  `keyword` varchar(255) DEFAULT NULL COMMENT '文章关键字',
  `cover` varchar(255) DEFAULT NULL COMMENT '文章封面',
  `browse` int DEFAULT NULL COMMENT '文章浏览次数',
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
