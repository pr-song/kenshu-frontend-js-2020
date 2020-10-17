(function () {
    'use strict';

    const button = document.getElementById('button');
    const text_type = document.getElementsByClassName('text--type')[0];
    const text_class = document.getElementsByClassName('text--class')[0];

    button.onclick = () => {
        text_type.textContent = button.getAttribute('data-type');
        text_class.textContent = button.getAttribute('class');
    };
})();