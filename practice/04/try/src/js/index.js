(function () {
    'use strict';

    const buttons = document.getElementsByClassName('button');
    console.log(button);

    [...buttons].forEach(button => {
        button.onclick = () => {
            button.nextElementSibling.classList.toggle('is-active');
        };
    });
})();
