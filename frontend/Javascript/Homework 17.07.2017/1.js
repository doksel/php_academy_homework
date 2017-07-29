alert(getFullname('Ivan'));
var surname = "Ivanov";
function getFullname(name) {
    return name + " " + surname;
}
// alert выведет Ivan undefined, т.к. когда срабатывает alert функция
// именная определена, а переменная со значение undefined, до
// неё мы ещё не дошли.