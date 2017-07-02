<?php
$text = 'А Васька слушает да ест. А воз и ныне там. А вы друзья как ни садитесь, все в музыканты не годитесь. А король-то — голый. А ларчик просто открывался. А там хоть трава не расти.';
function reverse($text)
{
    $array = explode('. ', $text);
    $array = array_reverse($array);
    $text = implode('. ', $array);
    return $text;
}
echo reverse($text);