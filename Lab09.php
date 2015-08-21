<?php 

$db = new SQLite3('my_database.db') or die('Unable to open database');

$name = $_GET['five'];
$md5= md5('$name');

$query = <<<EOD
CREATE TABLE IF NOT EXISTS table1(id INTEGER NOT NULL UNIQUE, key TEXT);
INSERT INTO table1(id, key) VALUES(1, '$md5');
EOD;
//$db->exec($query) or die("Error");
shell_exec("./pdflatex Lab9.tex");
include "Lab009.php";
?>