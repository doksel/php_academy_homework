var avatar = document.getElementById('avatar');
var avatarSourceBottom = avatar.getBoundingClientRect().bottom + window.pageYOffset;
window.onscroll = function () {
    if (window.pageYOffset > avatarSourceBottom){
        avatar.style.top = 0;
        avatar.style.left = 0;
        avatar.style.position = 'fixed';
        avatar.style.margin = 0;
    }
    if (window.pageYOffset < avatarSourceBottom) {
        avatar.style.position = '';
        avatar.style.margin = 20 + 'px';
    }
};