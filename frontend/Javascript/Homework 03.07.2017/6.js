var students = [
    {'name' : 'Petya',
        'surname' : 'Petrov',
        'assessments' : [4, 4, 4, 4, 4],
        'hasScholarship' : function () {
            var sum = 0;
            var len = this.assessments.length;
            for (var i = 0; i < len; i++) {
                sum += this.assessments[i];
            }
            var result = sum / len;
            if (result >= 4) {
                console.log(this.name, ' ', this.surname, ' ', 'на стипендии');
            }
            else {
                console.log(this.name, ' ', this.surname, ' ', 'без стипендии');
            }
        }
    },
    {'name': 'Ivan',
        'surname': 'Ivanov',
        'assessments': [4, 4, 5, 4],
        'hasScholarship': function () {
            var sum = 0;
            var len = this.assessments.length;
            for (var i = 0; i < len; i++) {
                sum += this.assessments[i];
            }
            var result = sum / len;
            if (result >= 4) {
                console.log(this.name, ' ', this.surname, ' ', 'на стипендии');
            }
            else {
                console.log(this.name, ' ', this.surname, ' ', 'без стипендии');
            }
        }
    },
    {'name' : 'Stepan',
        'surname' : 'Stepanov',
        'assessments' : [3, 3, 4, 3, 4],
        'hasScholarship' : function () {
            var sum = 0;
            var len = this.assessments.length;
            for (var i = 0; i < len; i++) {
                sum += this.assessments[i];
            }
            var result = sum / len;
            if (result >= 4) {
                console.log(this.name, ' ', this.surname, ' ', 'на стипендии');
            }
            else {
                console.log(this.name, ' ', this.surname, ' ', 'без стипендии');
            }
        }
    }
];

// второй вариант-----------------------------------

var students = [
    {'name' : 'Petya',
     'surname' : 'Petrov',
     'assessments' : [4, 4, 4, 4, 4],
    },
    {'name': 'Ivan',
     'surname': 'Ivanov',
     'assessments': [4, 4, 5, 4],
    },
    {'name' : 'Stepan',
     'surname' : 'Stepanov',
     'assessments' : [3, 3, 4, 3, 4],
    }
];

function hasScholarship() {
    var sum = 0;
    var len = this.assessments.length;
    for (var i = 0; i < len; i++) {
        sum += this.assessments[i];
    }
    var result = sum / len;
    if (result >= 4) {
        console.log(this.name, ' ', this.surname, ' ', 'на стипендии');
    }
    else {
        console.log(this.name, ' ', this.surname, ' ', 'без стипендии');
    }
}

hasScholarship.call(students[0]);
hasScholarship.call(students[1]);
hasScholarship.call(students[2]);