<?php
$a = $_POST['text_a'];
$b = $_POST['text_b'];
print_r(getCommonWords($a, $b));

function getCommonWords($a, $b)
{
    $array_a = explode(' ', $a);
    $array_b = explode(' ', $b);
    return array_intersect($array_a, $array_b);
}