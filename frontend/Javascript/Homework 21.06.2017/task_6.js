var  name = "Alex";
function sayName(name) {
    alert(name);
}
sayName();
sayName("Jack");
// sayName() выдаст undefined т.к. переменная задана вне функции и внутри функции не видна. Значит когда её вызываем, аргумент не задан
//sayName("Jack") выдаст "Jack"?, т.к. аргумент задан
