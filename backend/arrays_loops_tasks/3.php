<?php
$array = [1, 20, 15, 17, 24, 35];
$result = 0;
foreach ($array as &$v){
    $v *= $v;
    $result += $v;
}
echo $result;
unset($v);