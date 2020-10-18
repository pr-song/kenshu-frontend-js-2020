(function () {
    'use strict';

    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const list = document.getElementById('list');

    function addNewItem(jsonItem) {
        const newItem = document.createElement('li');
        const newTitle = document.createElement('h3');
        const newBody = document.createElement('p');

        newTitle.textContent = jsonItem.title;
        newBody.textContent = jsonItem.body;
        newItem.appendChild(newTitle);
        newItem.appendChild(newBody);
        list.appendChild(newItem);
    }

    fetch(URL)
        .then(response => response.json())
        .then(jsonResponse => jsonResponse.forEach((jsonItem) => {
            addNewItem(jsonItem);
        }))
        .catch(error => {
            throw new Error(error);
        });
})();