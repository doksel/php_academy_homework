var salaries = {'sasha': 3000, 'masha': 4500, 'dasha': 2400};
var max = 0, maxSalary = "";
function numName(){
    for (var name in salaries) {
        if (max < salaries[name]) {
            max = salaries[name];
            maxSalary = name;
        }
    }
    return maxSalary;
}

alert(numName());

// второй вариант---------------------------------

var salaries = {'sasha': 3000, 'masha': 4500, 'dasha': 2400};
var arrrySalaries = [];
function numName(){
    for (var name in salaries) {
        arrrySalaries.push(salaries[name])
    }

    return arrrySalaries.sort()[arrrySalaries.length-1];
}
alert(numName());