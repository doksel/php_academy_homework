<?php
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
foreach ($arr as $v) {
    if ($v % 3 == 0) {
        echo "$v ";continue;
    }echo "$v,";
}
echo '<hr>';
//Второй вариант
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
foreach ($arr as $v) {
    if ($v == 3 || $v ==6) {
        echo "$v ";
    }else {
        echo "$v,";
    }
}