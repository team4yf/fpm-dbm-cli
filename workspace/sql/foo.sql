
DROP TABLE IF EXISTS `foo`;
CREATE TABLE IF NOT EXISTS `foo` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `delflag` tinyint(4) NOT NULL DEFAULT '0' COMMENT '删除标示',
  `createAt` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据创建时间戳',
  `updateAt` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据更新时间戳',
  `f_key` varchar(200)  NULL  COMMENT '-', 
  `f_val` varchar(200) NOT NULL DEFAULT 'aaa' COMMENT '-', 
  `f_flag` varchar(200) NOT NULL  COMMENT '-', 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='foo comment';
  