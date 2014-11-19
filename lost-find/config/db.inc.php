<?php 

	class DBSQL{
		private $link = "";

		function __construct(){
			$link = mysql_connect(DB_HOST, DB_USER, DB_PWD) or die('fail!').mysql_error();
			if ($link && mysql_select_db(DB)) $this->link = $link;
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