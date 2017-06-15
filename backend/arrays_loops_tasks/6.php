<?php
$arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];
$en = [];
$ru = [];
foreach ($arr as $k => $v){
    $en = array_keys($arr);
    $ru = array_values($arr);
}