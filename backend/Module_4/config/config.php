<?php

Config::set('site_name', 'News site');
Config::set('languages', array('en','ru'));
Config::set('routes', array(
    'default' => '',
    'admin' => 'admin_',
));

Config::set('default_route', 'default');
Config::set('default_language', 'en');
Config::set('default_controller', 'pages');
Config::set('default_action', 'index');

Config::set('db.host', 'localhost');
Config::set('db.db_name', 'mvc');
Config::set('db.user', 'root');
Config::set('db.password', '');

Config::set('salt','jd7sj3sdd964he7e');