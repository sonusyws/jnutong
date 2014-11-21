<?php 
	/**
	* 数据库处理类
	*/
	class DB_HANDLE extends DBSQL{

		function __construct(argument){
			parent::__construct();
		}

		public function insert($table, $object, $campus, $contact, $detail){
			$sql = "INSERT INTO '%s' (object,campus,contact,detail) VALUES ('%s', '%s', '%s', '%s')";
			$sql = sprintf($sql, $table, $object, $campus, $contact, $detail);
			if($this->insert($sql)) return true;
			else return false;
		}

		public function display($table){
			$sql = "SELECT * FROM '%s' order by time,object desc";
			$sql = sprintf($sql, $table);
			return $this->select($sql);
		}

		public function search($table, $object){
			$sql = "SELECT * FROM '%s' where object='%s' order by time desc,object ";
			$sql = sprintf($sql, $table, $object);
			return $this->select($sql);
		}
	}






 ?>