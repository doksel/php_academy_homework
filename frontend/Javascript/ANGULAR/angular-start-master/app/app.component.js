"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todos = [
    { title: 'learn Angular',
        status: true },
    { title: 'learn TypeScript',
        status: false },
    { title: 'learn React',
        status: false }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular2';
        this.todos = todos;
    }
    AppComponent.prototype.toggle = function (todo) {
        // todo.status = !todo.status;
        var i = this.todos.indexOf(todo);
        this.todos[i].status = !this.todos[i].status;
    };
    AppComponent.prototype.delete = function (todo) {
        var i = this.todos.indexOf(todo);
        this.todos.splice(i, 1);
    };
    AppComponent.prototype.create = function (event, td) {
        event.prventDefault();
        this.todos.push({ title: this.newTaskTitle, status: false });
        this.newTaskTitle = "";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map