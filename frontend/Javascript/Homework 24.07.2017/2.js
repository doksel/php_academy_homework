function f() {
    alert(this.name);
}

f = f.bind( {name: "Ivan"} ).bind( {name: "Semen"} );

f();
// выведется  Ivan, т.к. bind  привязывает контекст на всегда и переопределить уже нельзя