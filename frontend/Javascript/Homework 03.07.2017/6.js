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