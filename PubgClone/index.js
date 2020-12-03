const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.mobile-nav');
const mainBody = document.querySelector('main');
menuIcon.addEventListener('click', () => {
    console.log("h");
    if (menu.style.display === 'none') {
        menu.style.display = "block";
        mainBody.style.display = "none";
    } else {
        menu.style.display = "none";
        mainBody.style.display = "";
    }

})

const mobile_sub_nav = document.querySelector('.mobile-sub-nav');
const mobile_sub_nav_content = document.querySelector('.mobile-sub-nav-content');
const mobile_nav_item = document.querySelectorAll('.mobile-nav-item');

mobile_sub_nav.addEventListener('click', (e) => {
    console.log("aa");
    if (mobile_sub_nav_content.className === 'mobile-sub-nav-content is-showing') {
        mobile_sub_nav_content.classList.replace('is-showing', 'is-hidden');
        mobile_nav_item.forEach(item => {
            if (item.className === 'mobile-nav-item mobile-sub-nav') {

            } else {
                item.classList.add('is-showing');
                item.classList.remove('is-hidden');
            }
        })
    } else {
        mobile_sub_nav_content.classList.replace('is-hidden', 'is-showing');
        mobile_nav_item.forEach(item => {
            if (item.className === 'mobile-nav-item mobile-sub-nav') {
            } else {
                item.classList.add('is-hidden');
                item.classList.remove('is-showing');

            }
        })

    }

})
