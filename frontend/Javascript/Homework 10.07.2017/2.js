function func() {
    'use strict';
    var student, greet;
    student = {
        greet: function () {
            alert(this);
        }
    }
    student.greet();// this == объект student {greet: function}
    (student.greet)();// this == объект student {greet: function}
    (greet = student.greet)();// this == undefined
    (student.greet || student.bye)();// this == undefined
}
func();