var  name = "Alex";
function sayName(name) {
    alert(name);
}
sayName();
sayName("Jack");
// sayName() выдаст undefined т.к. функции значение аргумента не передается, в () пусто.
//sayName("Jack") выдаст "Jack"?, т.к. аргумент задан
