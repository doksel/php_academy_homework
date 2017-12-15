import { Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'] 
})

export class ListComponent {
    @Input() todo1:any;

    toggle(todo:any) {
        let i = this.todo1.indexOf(todo);
       this.todo1[i].status = !this.todo1[i].status;
    }

    delete(todo: any) {
        let i = this.todo1.indexOf(todo);
        this.todo1.splice(i,1);
    }
    
}