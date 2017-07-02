<?php
function num_unique_words($a)
{
    $array = explode(' ', $a);
    $count_val = array_count_values($array);
//    print_r($array);
//    echo '<br>';
//    print_r($count_val);
//    echo '<br>';
    foreach ($array as $k => $v){
        if($count_val[$v] > 1){
            unset($array[$k]);
        }
    }
    return $array;
}
print_r(num_unique_words($_POST['text']));