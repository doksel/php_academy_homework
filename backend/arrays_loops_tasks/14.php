<?php
$arr = [4, 2, 5, 19, 13, 0, 10];
foreach ($arr as $e) {
    if ($e == 2 || $e == 3 || $e == 4) {
        echo "Есть!"; break;
    } else {
        echo "Нет!"; break;
    }
}