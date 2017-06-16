<?php
$a = '';
for($x = 1; $x <= 9; $x++){
    for($i = 0; $i < $x; $i++){
       $a .= $x;
    }
    echo $a . "<br>";
    $i = 0;
    $a = '';
}