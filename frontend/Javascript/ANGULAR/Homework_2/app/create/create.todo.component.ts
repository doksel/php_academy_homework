import { Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'form-todo',
    templateUrl: 'create.todo.component.html',
    styleUrls: ['create.todo.component.css'] 
})

export class CreateTodoComponent {
    
    newTaskTitle: any;

    create(event:any) {
        //event.preventDefault();
        //this.insideTodos.push({title: this.newTaskTitle, status: false });
        this.newTaskTitle='';
    }

}
