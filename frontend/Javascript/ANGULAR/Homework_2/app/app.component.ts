import { Component} from '@angular/core';

let todos = [
    {title: 'Learn Angular',
    status : true},
    {title: 'Learn TypeScript',
    status : false},
    {title: 'Learn React',
    status : false}];


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'] 
})

export class AppComponent {
    title = 'Angular';
    newTaskTitle: any;
    appTodos = todos;
    
}