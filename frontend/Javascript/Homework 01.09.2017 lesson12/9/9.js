var myTable = document.getElementById('myTable');
myTable.onmousedown = function (event) {
    var target = event.target;
    if (target.tagName != 'DIV') return;
    var coords = getCoords(event);
    var shiftX = event.pageX - coords.left;
    var shiftY = event.pageY - coords.top;
    myTable.appendChild(target);
    moveAt(event);
    target.style.zIndex = 100;
    function moveAt(event) {
        target.style.left = event.pageX - shiftX + 'px';
        target.style.top = event.pageY - shiftY + 'px';
    }

    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    myTable.onmousemove = function (event) {
        moveAt(event)
    };
    target.onmouseup = function() {
        myTable.onmousemove = null;
        target.onmouseup = null;
    };
};