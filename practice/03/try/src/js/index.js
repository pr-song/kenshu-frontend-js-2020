(function () {
    'use strict';

    const button = document.getElementById('button');
    const modal = {
        overlay: document.getElementById('modal-overlay'),
        content: document.getElementById('modal-content'),
        close: document.getElementById('modal-close')
    }

    function toggleClasses() {
        modal.overlay.classList.toggle('is-active');
        modal.content.classList.toggle('is-active');
    }

    button.onclick = () => {
        toggleClasses();
    }

    modal.overlay.onclick = () => {
        toggleClasses();
    }

    modal.close.onclick = () => {
        toggleClasses();
    }
})();
