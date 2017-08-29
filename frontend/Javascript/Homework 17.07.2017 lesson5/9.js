function Counter() {
    var counter = 0;
    var step = 2;

    return {
        next: function() {
            return counter += step;
        },
        reset: function() {
            return counter = 0;
        },
        setCounterValue: function(value) {
            counter = value;
        },
        back: function() {
            return counter -= step;
        },
    };
}

var c1 = new Counter();