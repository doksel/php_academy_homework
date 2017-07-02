<?php
$string = 'яблоко черешня вишня вишня черешня груша яблоко черешня вишня яблоко вишня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня черешня груша яблоко черешня вишня';
function sum_fruits($array)
{
    $array = explode(' ', $array);
    $arrayCount = array_count_values($array);
    foreach ($arrayCount as $k => $v){
        echo $k . ' - ' . $v . '<br>';
    }
    return $arrayCount;
}
sum_fruits($string);

echo '<hr>';//Второй вариант

$string = 'яблоко черешня вишня вишня черешня груша яблоко черешня вишня яблоко вишня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня черешня груша яблоко черешня вишня';
function sum_fruits2($array)
{
    $array = explode(' ', $array);
    $arrayCount = array_count_values($array);

    return $arrayCount;
}

foreach (sum_fruits2($string) as $k => $v){
    echo $k . ' - ' . $v . '<br>';
}