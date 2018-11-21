"use strict";
require('../sass/main.scss');

window.addEventListener('DOMContentLoaded', function() {
    let mlStr = 'bWFpbHRvOm1haWxAa2lsb2xpbWEuZGs';
    let menuItems = document.querySelectorAll('.menu > li');
    menuItems.forEach(el => {
        if (el.dataset.action == 'mail') {
            el.addEventListener('click', () => {
                location.href = atob(mlStr);
            });
        }
    });
});