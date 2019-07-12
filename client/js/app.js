"use strict";
require('../sass/main.scss');

window.addEventListener('DOMContentLoaded', () => {
    let mlStr = 'bWFpbHRvOm1haWxAa2lsb2xpbWEuZGs';
    let menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(el => {
        if (el.dataset.action == 'mail') {
            el.addEventListener('click', event => {
                event.preventDefault();
                window.location.href = atob(mlStr);
            });
        }
    });
});
