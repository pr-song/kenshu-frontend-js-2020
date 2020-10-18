(function () {
    'use strict';

    const mainImg = document.getElementsByClassName('main-img')[0];
    const thumbItemImgs = document.getElementsByClassName('thumb-item-img');

    [...thumbItemImgs].forEach(thumbItemImg => {
        thumbItemImg.onmouseover = (e) => {
            const newImgSrc = e.currentTarget.getAttribute('src').replace('_small', '_large');
            mainImg.setAttribute('src', newImgSrc);
            document.getElementsByClassName('is-active')[0].classList.remove('is-active');
            e.currentTarget.classList.add('is-active');
        };
    });
})();
