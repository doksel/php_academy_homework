<?php
$arr = ['Понедельник','Вторник','Среда','Четверг','Пятница',
    'Суббота','Воскресенье'];
foreach ($arr as $k =>$v) {
    $day = 4;
    if ($k == $day) {
        echo "<em>$v</em>" . '<br>';
        continue;
    } else {
        echo $v . '<br>';
    }
}