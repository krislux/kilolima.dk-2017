"use strict";
require('../sass/main.scss');

window.addEventListener('DOMContentLoaded', function() {
    var mlStr = 'bWFpbHRvOm1haWxAa2lsb2xpbWEuZGs';
    var menuItems = document.querySelectorAll('menu > li');
    menuItems.forEach(function (el) {
        if (el.dataset.url) {
            el.addEventListener('click', function() {
                window.open(el.dataset.url);
            })
        }
        if (el.dataset.action == 'mail') {
            el.addEventListener('click', function() {
                location.href = atob(mlStr);
            })
        }
    });
});