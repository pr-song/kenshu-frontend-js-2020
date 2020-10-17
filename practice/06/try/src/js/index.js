(function () {
    'use strict';

    const form = document.getElementById('form');
    const formElements = {
        name: form.name,
        gender: form.gender,
        button: form.register
    };
    const textElements = {
        name: document.getElementById('name-text'),
        gender: document.getElementById('gender-text'),
        wrapper: document.getElementById('text-wrapper')
    }

    formElements.button.onclick = () => {
        textElements.name.textContent = formElements.name.value;
        textElements.gender.textContent = formElements.gender.value;
        textElements.wrapper.classList.add('is-active');
    }
})();
