/* このpratice-10が行き詰まったので、/example の中にあるコードの内容を読んでから再書きつつ、理解するようにしました。*/
(function () {
    'use strict';

    const elements = {
        prev: document.getElementsByClassName('prev')[0],
        next: document.getElementsByClassName('next')[0],
        list: document.getElementsByClassName('list')[0],
        items: document.getElementsByClassName('item')
    };

    const widthValues = {
        list: elements.list.clientWidth,
        item: elements.items[0].clientWidth
    };

    const isTransitioning = {
        prev: false,
        next: false
    };

    // inserting new item before list's first child element
    function prependItemToList(itemElement) {
        elements.list.insertBefore(itemElement, elements.list.firstElementChild);
    };

    // inserting new item after list's last child element
    function appendItemToList(itemElement) {
        elements.list.appendChild(itemElement);
    }

    //  processing to display the previous element when .prev is clicked 
    function slidePrev() {
        elements.list.classList.add('is-transition');
        elements.list.style.marginLeft = `${widthValues.item}px`;
    };

    // processing to display the next element when .next is clicked
    function slideNext() {
        elements.list.classList.add('is-transition');
        elements.list.style.marginLeft = `-${widthValues.item}px`;
    };

    //processing after transition is ended
    function slidePrevAfterTransition() {
        prependItemToList(elements.items[elements.items.length - 1]);
        elements.list.style.marginLeft = '0px';
        elements.list.classList.remove('is-transition');
        isTransitioning.prev = false;
    };

    function sildeNextAfterTransition() {
        appendItemToList(elements.items[0]);
        elements.list.style.marginLeft = '0px';
        elements.list.classList.remove('is-transition');
        isTransitioning.next = false;
    };

    //adding event
    function addEvent(){
        // processing event when prev is clicked
        elements.prev.onclick = () => {
            slidePrev();
            isTransitioning.prev = true;

            elements.list.ontransitionend = () => {
                if(!isTransitioning.prev) return false;
                slidePrevAfterTransition();
            };
        };

        // processing event when next is clicked
        elements.next.onclick = () => {
            slideNext();
            isTransitioning.next = true;

            elements.list.ontransitionend = () => {
                if(!isTransitioning.next) return false;
                sildeNextAfterTransition();
            };
        };
    };

    // init style to list
    function addInitialStyleToList() {
        elements.list.style.left = `-${widthValues.list}px`;
    }

    // insert all clones of item before list's first item
    function prependAllItems() {
        // create clone list, extract items and then convert to array and reverse order
        const cloneItems = Array.from(elements.list.cloneNode(true).getElementsByClassName('item')).reverse();
        
        cloneItems.forEach(cloneItem => {
            prependItemToList(cloneItem);
        });

        addInitialStyleToList();
    };

    function init() {
        prependAllItems();
        addEvent();
    };

    init();
})();
