const menu = document.getElementById('menu');
const active_menu = document.getElementById('active-menu');
const mobile_nav = document.querySelector('.mobile-nav');
const main = document.getElementById('main');
menu.addEventListener('click', () => {
    mobile_nav.classList.remove('hidden');
    mobile_nav.classList.add('block');

    active_menu.classList.remove('hidden');
    menu.classList.add('hidden');

})


active_menu.addEventListener('click' , () => {
    mobile_nav.classList.remove('block');
    mobile_nav.classList.add('hidden');

    active_menu.classList.remove('block');
    active_menu.classList.add('hidden')
    menu.classList.remove('hidden');
    menu.classList.add('block');
    main.classList.remove('hidden');

})



const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');
const tabImage = document.querySelectorAll('.tab-image');
function selectItem(e) {
    RemoveShow();
    RemoveBorder();
    this.classList.add('border-b')
    const tabContentItem = document.getElementById(`tab-${this.id}-content`);
    tabContentItem.classList.remove('hidden');
    tabContentItem.classList.add('block');

    const tabBgImage = document.querySelector(`.tab-${this.id}-image`);
    tabBgImage.classList.remove('hidden');
    tabBgImage.classList.add('block');

}

function RemoveShow() {
    tabImage.forEach(item => item.classList.remove('block'));
    tabImage.forEach(item => item.classList.add('hidden'));

    tabContent.forEach(item => item.classList.remove('block'));
    tabContent.forEach(item => item.classList.add('hidden'));
}

function RemoveBorder() {
    tabs.forEach(item => item.classList.remove('border-b'));
}


console.log(tabs);
tabs.forEach(ele => ele.addEventListener('click', selectItem));

