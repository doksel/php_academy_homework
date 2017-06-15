<?php
$a = 15;
$b = 0;
$c = $a / $b;
$operator = '/';
if ($b !=0) {
    echo "$a $operator $b = $c";
}else{
    echo "Делить на 0 нельзя";
}