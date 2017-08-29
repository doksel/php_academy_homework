function Human() {
    this.name = '';
    this.surname = '';
    this.lastname = '';
}

var listProfessions = ['footballer', 'musician', 'developer', 'manager'];
var AVERAGE_SALARY = 3000;   // средняя зарплата

function Worker(obj) {
    Human.apply(this, arguments);

    this.name = obj.name;
    this.surname = obj.surname;
    this.profession = obj.profession;
    this.startedToWork = obj.date;

    this.salary = function(){
        return coefExperience.call(this)*coefSalary.call(this)*AVERAGE_SALARY.toFixed(0);
    };

    this.experience1 = function (){
        return (new Date().getFullYear()-this.startedToWork[0])+1;
    };
    this.experience = function () {
        setInterval(this.experience1,6000);
    };


function coefExperience() {     // коэффициент опыта
    if (0 <= this.experience() && this.experience() < 2){return 1;}
    else if (2 <= this.experience() && this.experience() < 5){return 1.5;}
    else if (5 <= this.experience() && this.experience() < 7){return 1.75;}
    else if (7 <= this.experience() && this.experience() < 10){return 2;}
    else {return 3;}
}
function coefSalary() {     //  расчет коэффициента зарплаты
    switch (this.profession){
        case 'footballer': return 1.4; break;
        case 'musician': return 1.3; break;
        case 'developer': return 1.2; break;
        case 'manager': return 1.1; break;
        default: alert ('Выберите другую профессию');
    }
}
function interval() {
    this.experience1++;
}
}

var footballer = new Worker({name: 'ivan', surname:'ivanov', profession:'footballer',date:[2010,2,10]});
var musician = new Worker({name: 'vasia', surname:'vasov', profession:'musician',date:[2015,2,10]});
var manager = new Worker({name: 'petr', surname:'petrov', profession:'manager',date:[2013,2,10]});