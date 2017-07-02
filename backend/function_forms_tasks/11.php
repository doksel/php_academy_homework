<?php
$text = 'а Васька слушает да ест. а воз и ныне там. а вы друзья как ни садитесь, все в музыканты не годитесь. а король-то — голый. а ларчик просто открывался. а там хоть трава не расти.';
function up_regist($text)
{
    $array = explode('. ', $text);
    //print_r($array);
    foreach ($array as $k => $v){
//        $array[$k] = ucfirst($v);
        $array[$k] = mb_strtoupper(mb_substr($v, 0, 1)) . mb_substr($v,1);
    }
    return implode('. ', $array);
}

print (up_regist($text));