<?php
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreach ($arr as $v){
    for($n = 1; $n <=10; $n++){
        $s = $n * $v;
    echo "$v * $n = $s" . '<br>';
    }
}