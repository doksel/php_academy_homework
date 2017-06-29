<?php
$a = $_POST['text'];

function top3($a){

$array_a = explode(' ',$a);
function topWords($a, $b){
    if (strlen($a) == strlen($b)){
        return 0;
    }else{
return (strlen($a) < strlen($b)) ? 1 : -1;}
}
usort($array_a, 'topWords');
return array_slice($array_a, 0, 3);
}
print '<pre>';
print_r(top3($a));
print '</pre>';