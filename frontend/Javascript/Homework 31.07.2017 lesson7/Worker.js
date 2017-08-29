function Human() {
    this.name = 'name';
    this.surname = 'surname';
}


Worker.allWorkers = [];        //  список созданных рабочих
var AVERAGE_SALARY = 3000;      //  средняя зарплата

function Worker(obj) {

    Human.call(this, arguments);

    this.name = obj.name;
    this.surname = obj.surname;
    this.profession = obj.profession;
    this.startedToWork = new Date().getFullYear() - new Date(obj.date.join(',')).getFullYear();    //  начало работы
    this.nextExperienceInMinutes = new Date().getMinutes();
    this.experience = function () {//  расчет опыта
        Worker.allWorkers.push(this);
        return (this.startedToWork + (new Date().getMinutes() - this.nextExperienceInMinutes));
    };

    this.coefExperience = function () {// коэффициент опыта
        if (0 <= this.experience() && this.experience() < 2){return 1;}
        else if (2 <= this.experience() && this.experience() < 5){return 1.5;}
        else if (5 <= this.experience() && this.experience() < 7){return 1.75;}
        else if (7 <= this.experience() && this.experience() < 10){return 2;}
        else {return 3;}
    };

    this.coefSalary = function () {     //  расчет коэффициента зарплаты
        switch (this.profession){
            case 'footballer': return 1.4; break;
            case 'musician': return 1.3; break;
            case 'developer': return 1.2; break;
            case 'manager': return 1.1; break;
            default: alert ('Выберите другую профессию');
        }
    };

    this.salary = function () {       //  расчет зарплаты
        return (this.coefExperience()*this.coefSalary()*AVERAGE_SALARY).toFixed(0);
    };

    Worker.allWorkers.push([this.name, this.surname, this.profession, this.startedToWork, this.salary(), this.experience()]);

    this.history = [];
    this.changeProfession = function (profession) {
        this.history.push([this.profession, this.experience(), this.salary()]);
        this.experience = 0;
        this.profession = profession;
    };
}
Worker.showAllWorkers = function () {
    console.log(Worker.allWorkers);
};

Worker.sortAllWorkers = function (argument) {
    switch (argument){
        case 'profession':return Worker.allWorkers.sort(function(a, b) {return a[2] - b[2];});break;
        case 'salary':return Worker.allWorkers.sort(function(a, b) {return a[4] - b[4];});break;
        case 'surname':return Worker.allWorkers.sort(function(a, b) {return a[1] - b[1];});break;
        case 'experience':return Worker.allWorkers.sort(function(a, b) {return a[5] - b[5];});break;
    }
};

Worker.showBestWorkersSalary = function () {
    return Worker.sortAllWorkers('salary')[Worker.allWorkers.length-1];
};

Worker.showBestWorkersSalaryByProfession = function (argument) {
    var arrayWorkers = [];
    for(var i=0; i<Worker.allWorkers.length;i++){
        if(Worker.allWorkers[i][2] === argument){
            arrayWorkers.push(Worker.allWorkers[i]);
        }
    }return (arrayWorkers.sort(function(a, b) {return a[2] - b[2];}))[0];
};

var footballer = new Worker({name: 'ivan', surname:'ivanov', profession:'footballer',date:[2010,2,10]});
var musician = new Worker({name: 'vasia', surname:'vasov', profession:'musician',date:[2015,2,10]});
var manager = new Worker({name: 'petr', surname:'petrov', profession:'manager',date:[2013,2,10]});
var footballer2 = new Worker({name: 'ivan', surname:'ivanov', profession:'footballer',date:[2013,2,10]});
var musician2 = new Worker({name: 'vasia', surname:'vasov', profession:'musician',date:[2010,2,10]});
var manager2 = new Worker({name: 'petr', surname:'petrov', profession:'manager',date:[2016,2,10]});