<?php 

//define host and main path
	define (HOST, 'http://www.jnutong.com');
	define (PATH, '/jnt2014/interaction/lost&find/');

	//数据库连接参数
	define (DB_HOST, 'localhost');	//port including, if the port is not '3306'
	define (DB_USER, 'jnt2014');	
	define (DB_PWD, 'JNUTONG2014');
	define (DB_NAME, 'interaction');

	//表名
	define (TABLE_LOST, 'interaction_lost');
	define (TABLE_FIND, 'interaction_find');

	class DBSQL{
		private $link = "";

		function __construct(){
			$link = mysql_connect(DB_HOST, DB_USER, DB_PWD) or die('fail!').mysql_error();
			if ($link && mysql_select_db(DB_NAME)) $this->link = $link;
			ini_set('date.timezone','Asia/Shanghai');
		}

		public function select($sql = ''){
			if(empty($sql)) return false;

			$result = mysql_query($sql, $this->link);

			if(empty($result)) return false;

			$count = 0;
			$data =array();

			while ($row = @mysql_fetch_array($result)) {
				$data[$count] = $row;
				$count++;
			}

			return $data;
		}

		public function insert($sql = ''){
			if(empty($sql)) return false;
			$result = mysql_query($sql, $this->link);
			return $result;
		}

		public function update($sql=''){
			if(empty($sql)) return false;
			$result = mysql_query($sql, $this->link);
			return $result;
		}

		public function delete($sql=''){
			if(empty($sql)) return false;
			$result = mysql_query($sql, $this->link);
			return $result;
		}

		function __destruct() {
			if (is_resource($this->link)) mysql_close($this->link);
		}
	}	




 ?>