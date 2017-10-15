var bigImg = document.getElementById('bigImg');
var divImg = document.getElementById('divImg');
divImg.onclick = function (event) {
    var target = event.target;
    var atrBigImg = target.getAttribute('src');
    bigImg.innerHTML = '<img src="' + atrBigImg + '" alt="image">';
};