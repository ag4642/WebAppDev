<?php 

    $file = file_get_contents("Scrabble.txt"); 
    $firstletter = $_GET['one'];
    $lastletter = $_GET['two'];
    $numberletter = $_GET['three'];
    $n = $_GET['four'];
    $nthletter = $_GET['five'];
    settype($numberletter, "integer");
    settype($n, "integer");
   
   if($numberletter!=0)
   {
    $numberletter= $numberletter-strlen($firstletter)-strlen($nthletter)-1;
   }
    if($n!=0)
   {
    $n=$n-strlen($firstletter)-1;
   }
    $pattern = '/\b'.$firstletter.'\w{'.$n.'}'.$nthletter.'\w{'.$numberletter.'}'.$lastletter.'\b/';
    //echo $pattern;
 
    
    preg_match_all($pattern, $file, $matches ); 
    
    echo "<pre>";
    print_r($matches);
    echo "</pre>";
   
    ?>