<?php
$arr = [];
for ($a = 0; $a <= 7; $a++){
    $arr[$a] = rand(0, 100);
}
echo '<pre>';
print_r($arr);
echo '</pre>';
$x = 1;
$z = 1;
foreach ($arr as $k => $v){
    if ($v !== 0 && $v > 9 && $v < 100){
        $x *= $v;
    }elseif ($v !== 0 && $v < 10){
        $z *= $v;
    }
}
echo "Произведение значений с парным индексом = $x" . '<br>';
echo "Произведение значений с непарным индексом = $z";