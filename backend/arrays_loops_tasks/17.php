<?php
$arr = ['Январь','Февраль','Март','Апрель', 'Май','Июнь',
    'Июль','Август','Сенябрь','Октябрь','Ноябрь','Декабрь'];

foreach ($arr as $k =>$v){
    $month = 5;
    if ($k == $month){
        echo "<b>$v</b>".'<br>';
    }else{
        echo $v.'<br>';
    }
}
