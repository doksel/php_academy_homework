<?php
$arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];
$en = [];
$ru = [];
foreach ($arr as $k => $v){
    $en[] = $k;
    $ru[] = $v;
}
echo '<pre>';
print_r($en);
print_r($ru);
echo '</pre>';