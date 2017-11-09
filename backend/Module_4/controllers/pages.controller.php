<?php

class PagesController extends Controller{

    public function index(){
        $this->data['test_content'] = 'Here will be a page list';
    }

    public function view(){
        $params = App::getRouter()->getParams();
        if (isset($params[0])){
            $alias = strtolower($params[0]);
            $this->data['content'] = "Here will be a page with '{$alias}' aliaas";
        }
    }
}