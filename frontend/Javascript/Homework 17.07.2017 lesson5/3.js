var name = "Petr";
function getName() {
    if (1){
        name = "Ivan";
    } else {
        name = "Stepan";
    }
    alert(name);
}
getName();
alert(name);
//первый alert внутри функции выведет Ivan, т.к. Tests_for_calculator = true, и мы перезаписываем глобальную переменную name
//второй alert выведет Ivan, т.к. name = Petr изменен на Ivan