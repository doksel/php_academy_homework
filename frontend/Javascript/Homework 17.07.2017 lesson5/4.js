function func() {
    alert(window);
}
func();
function func1() {
    alert(window);
    var window = {name: 'Petr', toString: function(){return this.name;}};
    alert(window);
}
func1();
//выведет objectWindow, т.к. принимает значение гловального объекта Window
//выведет undefined, т.к. локальная переменная объявлена внутри функции, но она ещё равна undefined
//выведет Petr,т.к. переменная window уже принимает значение,а toString приводит к строке, то что вернула функция
