(function () {
    'use strict';

    const form = document.getElementById('form');
    const formElements = {
        name: form.name,
        mail: form.mail,
        gender: form.gender,
        age: form.age,
        term: form.term,
    };

    const formElelementsArray = Object.values(formElements);

    const error = document.getElementById('error');

    function isElementsFilled() {
        return formElelementsArray.filter(element => {
            if (element.type === 'checkbox'){
                return element.checked === false;
            }
            else {
                return element.value === '';
            }
        }).length === 0;
    }
    
    form.onsubmit = (e) => {
        e.preventDefault();

        if (isElementsFilled()) {
            e.currentTarget.submit();
        }
        else {
            error.classList.add('is-active');            
        }
    }
})();