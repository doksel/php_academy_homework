<?php
$number = 2222334246;
$array = str_split($number);
/*echo '<pre>';
print_r($array);
echo '</pre>';*/

$array_1 = array_count_values($array);
/*echo '<pre>';
print_r($array_1);
echo '</pre>';*/

$x = 2;
foreach ($array_1 as $k => $v ){
    if ($x == $k){
        echo "Цифра $x повторяется $v раз";break;
    }else{
        echo "Такой цифры нет!";break;
    }
}
