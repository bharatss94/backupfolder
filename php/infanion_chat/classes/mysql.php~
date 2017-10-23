<?php
  class mysql{
    var $dbname;
    var $dbuser;
    var $dbpass;
    var $link;
    function mysql() {
      $this->dbname = 'infanion_chat';
      $this->dbuser = 'root';
      $this->dbpass = 'root';
      $this->link = mysql_connect("localhost", $this->dbuser, $this->dbpass);
      mysql_select_db($this->dbname, $this->link);
      mysql_query("SET names UTF8");
    }
    function executequery($query, $error_checking = true) {
      if (!$query) {
        return false;
      }
      $res = mysql_query($query, $this->link);
      if (!$res) {
        $this->error('Database query error', false, $query);
       return $res;
      }
    }
    function getresult($query, $arr_type = MYSQL_ASSOC) {
      if(!$query) {
        return array();
      }
      if($arr_type != MYSQL_ASSOC && $arr_type != MYSQL_NUM && $arr_type != MYSQL_BOTH) {
        $arr_type = MYSQL_ASSOC;
        $res = $this->executequery ($query);
        $arr_res = array();
      }  
      if($res && mysql_num_rows($res)) {
        $arr_res = mysql_fetch_array($res, $arr_type);
        mysql_free_result($res);
      }
      return $arr_res;
    }
  }
$GLOBAL['MYSQL']=new mysql();
?>
