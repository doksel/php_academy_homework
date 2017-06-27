<?php
var_dump(getCommonWords($_POST['text_a'], $_POST['text_b']));

function getCommonWords($a, $b)
{
    $array_a = explode(' ', $a);
    $array_b = explode(' ', $b);
    return array_intersect($array_a, $array_b);
}