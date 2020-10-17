(function () {
    'use strict';

    const input = document.getElementById('input');
    const text = document.getElementById('text');

    function checkTextInput(input) {
        if (input.value.indexOf('yes') != -1){
            text.textContent = input.value;
        }
        else {
            text.textContent = '';
        }
    }

    input.onkeyup = () => {
        checkTextInput(input);
    }
})();
