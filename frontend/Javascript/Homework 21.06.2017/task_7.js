function sayHi() {
    alert("hi");
}
function sayHello() {
    alert("hello");
}
alert(sayHi() === sayHello());
// Выведет alert("hi"), alert("hello"), потом alert("true"),
// т.к. alert ничего не возвращает и равен undefined, а
// undefined === undefined, третий alert выведет true.