<?php
$day = 15;
switch ($day){
    case ($day !==0 && $day >= 1 && $day <=5) : echo "Это рабочий день"; break;
    case ($day !==0 && $day >= 6 && $day <=7) : echo "Это выходной день"; break;
    default : echo "Неизвестный день";
}