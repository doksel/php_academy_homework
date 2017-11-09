<?php

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));
define('VIEWS_PATH', ROOT.DS.'views');

require_once (ROOT.DS.'lib'.DS.'init.php');

//----Тестируем----
//$router = new Router($_SERVER['REQUEST_URI']);
//$uri = $_SERVER('REQUEST_URI');
//print_r($uri);

App::run($_SERVER['REQUEST_URI']);
