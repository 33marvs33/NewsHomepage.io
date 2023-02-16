const selected = selector => {
    const Element = document.querySelector(selector);
    if(Element) {
        return Element
    }else {
        throw new('no element')
    }
}

const openMenu = selected('.open-menu');
const closeMenu = selected('.close-menu');
const nav = selected('.nav');
const wrapperOverlay = selected('.wrapper');

openMenu.addEventListener('click', () => {
    nav.classList.add('openNav')
    if(nav.classList.contains('openNav')) {
        wrapperOverlay.classList.add('overlay')
    }
})
closeMenu.addEventListener('click', () => {
    nav.classList.remove('openNav')
    wrapperOverlay.classList.remove('overlay')
})

const imageChange = selected('.change');
window.addEventListener('resize', () => {
    if(this.innerWidth >= 700) {
        imageChange.setAttribute('src', '/assets/images/image-web-3-desktop.jpg')
    }else {
        imageChange.setAttribute('src', '/assets/images/image-web-3-mobile.jpg')
    }
})