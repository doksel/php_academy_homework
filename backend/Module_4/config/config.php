<?php

Config::set('site_name', 'Your site Name');
Config::set('languages', array('en','ru'));

Config::set('routes', array(
    'default' => '',
    'admin' => 'admin',
));

Config::set('default_route', 'default');
Config::set('default_language', 'en');
Config::set('default_controller', 'pages');
Config::set('default_action', 'index');
