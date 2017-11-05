import { Component } from '@angular/core';

export class Phones{
  id: number;
  name: string;
  typephone: string;
  system: string;
  memory: string;
  screen: string;
  camera: string;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'Catalog of phone';
  selectedPhone: Phones;
  public heroes = PHONES;
  onSelect(phone: Phones){this.selectedPhone = phone;}
}
const PHONES: Phones[] = [
  { id: 1,
    name: 'Xiaomi Redmi 4X 2 16Gb',
    typephone: 'Смартфон',
    system: 'Android 6.0',
    memory: '2 Гб, 16 Гб встроенной',
    screen: '5"',
    camera: 'тыловая 13 Мп, со вспышкой, фронтальная 7 Мп'},
  { id: 2,
    name: 'Apple iPhone 7 32Gb',
    typephone: 'Смартфон',
    system: 'iOS 10',
    memory: '32 Гб встроенной',
    screen: '4.7"',
    camera: 'тыловая 12 Мп, со вспышкой, фронтальная 7 Мп'},
  { id: 3,
    name: 'Samsung Galaxy J7 16Gb',
    typephone: 'Смартфон',
    system: 'Android 7.0',
    memory: '3 Гб, 16 Гб встроенной',
    screen: '5.5"',
    camera: 'тыловая 13 Мп, со вспышкой, фронтальная 13 Мп'},
];