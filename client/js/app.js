"use strict";
require('../sass/main.scss');

window.addEventListener('DOMContentLoaded', () => {
    let mlStr = 'bWFpbHRvOm1haWxAa2lsb2xpbWEuZGs';
    let menuItems = document.querySelectorAll('.menu li');
    [].forEach.call(menuItems, el => {
        if (el.dataset.action == 'mail') {
            el.addEventListener('click', event => {
                event.preventDefault();
                window.location.href = atob(mlStr);
            });
        }
    });
});
