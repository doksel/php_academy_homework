<?php
$arr = [2, 5, 9, 15, 0, 4];
foreach ($arr as $v){
    if($v > 3 && $v < 10){
        echo $v . '<br>';
    }
}