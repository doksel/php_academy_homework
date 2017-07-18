<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
$my_text = $_POST['text'];
$my_name = $_POST['name'];
if(!empty($my_text)){
    echo $my_name . ' : ' . $my_text .'<br>';
} ?>
<form method="post" action="7.php">
    <input type="text" name="name" placeholder="Ваше имя"><br>
    <textarea name="text" title="text" placeholder="Ведите коментарий"></textarea><br>
    <p><input type="submit"></p>
</form>
</body>
</html>