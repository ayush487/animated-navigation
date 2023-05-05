const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')
const navItems = [nav1, nav2, nav3, nav4, nav5]

const animateNav = (removeValue, addValue) => {
    navItems.forEach((nav, index) => {
        nav.classList.remove(`slide-${removeValue}-${index}`)
        nav.classList.add(`slide-${addValue}-${index}`)
    })
}

const toggleNav = () => {
    // Toggle Meny Bars Open/Closed
    menuBars.classList.toggle('change')
    // Toggle Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In-Overlay
        overlay.classList.remove('overlay-slide-left')
        overlay.classList.add('overlay-slide-right')
        // Animate In - Nav Items
        animateNav('out','in')
    }else {
        // Animate Out-Overlay
        overlay.classList.remove('overlay-slide-right')
        overlay.classList.add('overlay-slide-left')
        // Animate Out - Nav Items
        animateNav('in', 'out')
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
})