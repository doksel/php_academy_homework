"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Phones = (function () {
    function Phones() {
    }
    return Phones;
}());
exports.Phones = Phones;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Catalog of phone';
        this.heroes = PHONES;
    }
    AppComponent.prototype.onSelect = function (phone) { this.selectedPhone = phone; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PHONES = [
    { id: 1,
        name: 'Xiaomi Redmi 4X 2 16Gb',
        typephone: 'Смартфон',
        system: 'Android 6.0',
        memory: '2 Гб, 16 Гб встроенной',
        screen: '5"',
        camera: 'тыловая 13 Мп, со вспышкой, фронтальная 7 Мп' },
    { id: 2,
        name: 'Apple iPhone 7 32Gb',
        typephone: 'Смартфон',
        system: 'iOS 10',
        memory: '32 Гб встроенной',
        screen: '4.7"',
        camera: 'тыловая 12 Мп, со вспышкой, фронтальная 7 Мп' },
    { id: 3,
        name: 'Samsung Galaxy J7 16Gb',
        typephone: 'Смартфон',
        system: 'Android 7.0',
        memory: '3 Гб, 16 Гб встроенной',
        screen: '5.5"',
        camera: 'тыловая 13 Мп, со вспышкой, фронтальная 13 Мп' },
];
//# sourceMappingURL=app.component.js.map