var bodyDoc = document.querySelector('body');
bodyDoc.onmouseover = function (event) {
    var target = event.target;
    // var button = bodyDoc.querySelector('button');
    if(!target.hasAttribute('data-tooltip')) return;
    var text = target.getAttribute('data-tooltip');
    if (!text)return;
    var textTooltip = document.getElementById(text);
    textTooltip.innerHTML = text;
    textTooltip.style.position = 'absolute';
    textTooltip.style.backgroundColor = '#ebe073';
    textTooltip.style.border = '1px solid black';
    textTooltip.style.borderRadius = '5px';
    textTooltip.style.display = 'block';
    textTooltip.style.zIndex = 1000;
    console.log(target);
    if (event.clientY < 50){
        textTooltip.style.top = target.offsetTop + 20 + 'px';
        console.log(textTooltip.style.top);
        // textTooltip.style.top = button.style.top + 40 + 'px';
    }
    else {
        // textTooltip.style.left = event.pageX;
        textTooltip.style.top = target.offsetTop - 20 + 'px';
        console.log(textTooltip.style.top);
        // textTooltip.style.top = button.style.top - 40 + 'px';
    }
};
bodyDoc.onmouseout = function (event) {
    var target = event.target;
    if(!target.hasAttribute('data-tooltip')) return;
    var text = target.getAttribute('data-tooltip');
    if (!text)return;
    var textTooltip = document.getElementById(text);
    textTooltip.innerHTML = '';
    textTooltip.style.display = 'none';
};
