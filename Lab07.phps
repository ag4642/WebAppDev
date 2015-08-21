<?php 

$stats = array(); 
$file = 'Lab7.txt'; 

$current = file_get_contents($file); 

$stats = json_decode($current,true); 

$stats['visits']+=1; 
echo 'Number of page visits: '.$stats['visits'].'<br>'; 

 date_default_timezone_set('America/New_York');  

 $currTime = date("Y-m-d H:i:s"); 
 echo 'Current time: '.$currTime.'<br>'; 

 echo 'Time of last visit: '.$stats['lastTime'].'<br>'; 
 $stats['lastTime'] = $currTime; 

 file_put_contents($file, json_encode($stats,true)); 
   ?> 