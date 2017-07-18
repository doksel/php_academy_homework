<?php
$my_text = $_POST['text'];
$my_name = $_POST['name'];
if(!empty($my_text)){
    echo $my_name . ' : ' . $my_text .'<br>';
}