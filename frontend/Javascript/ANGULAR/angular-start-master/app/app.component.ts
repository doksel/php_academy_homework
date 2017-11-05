import {Component} from '@angular/core';

let todos = [
    {title: 'learn Angular',
        status: true},
    {title:'learn TypeScript',
        status: false},
    {title:'learn React',
        status: false}
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export  class AppComponent{
    title = 'Angular2';
    newTaskTitle: any;
    todos = todos;

    toggle (todo: any){
    // todo.status = !todo.status;
    let i = this.todos.indexOf(todo);
    this.todos[i].status = !this.todos[i].status;
    }
    delete(todo:any){
        let i = this.todos.indexOf(todo);
        this.todos.splice(i,1)
    }
   create(event:any, td:any){
        event.prventDefault();
        this.todos.push({title: this.newTaskTitle, status: false});
        this.newTaskTitle="";
   }
}