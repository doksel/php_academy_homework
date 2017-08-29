var name = "Petr";
function getName() {
    if (1){
        name = "Ivan";
    } else {
        var name = "Stepan";
    }
    alert(name);
}
getName();
alert(name);
// Первый alert выведет Ivan, т.к. Tests_for_calculator = true, значит внутри фунции name = "Ivan"
// Второй alert выведет Petr, т.к. глобальная var name = "Petr", а Ivan и Stepan локальные