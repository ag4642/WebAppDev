
<a href="https://www.tjhsst.edu/~2015agarg/Lab9.pdf" name="link" download onclick="include_file('Lab0009.php');">Download your key</a>
<?php
$db = new SQLite3('my_database.db') or die('Unable to open database');
$query = <<<EOD
DELETE FROM table1;
EOD;
$db->exec($query) or die("Error");
?>