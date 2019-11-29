CREATE TABLE IF NOT EXIST `log_table` (
     `id` int(11) NOT NULL AUTO_INCREMENT,
     `file_name` varchar(250) NOT NULL,
     `file_size` varchar(50) NOT NULL,
     `time_stamp` varchar(150) NOT NULL,
     PRIMARY KEY (`id`))
     ;
