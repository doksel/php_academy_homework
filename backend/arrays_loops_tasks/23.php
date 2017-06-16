<?php
$number = 2222334246;
$array = str_split($number);
/*echo '<pre>';
print_r($array);
echo '</pre>';*/
$sum = 0;
foreach ($array as $k => $v){
    if (is_numeric($v)){
    $sum += $v;
    }
}
echo $sum;