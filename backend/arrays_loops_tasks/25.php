<?php
$arr = [];
for ($a = 0; $a <= 7; $a++){
    $arr[$a] = rand(0, 15);
}
echo '<pre>';
print_r($arr);
echo '</pre>';
$maxn = max($arr);
$minn = min($arr);

echo "Максимальное значение = $maxn" .'<br>';
echo "Минимальное значение = $minn" .'<br>';

echo "Максимальное значение = $minn" .'<br>';
echo "Минимальное значение = $maxn";