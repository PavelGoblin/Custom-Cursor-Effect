const customcursor = document.querySelector('.custom-cursor')
const hoverElements = document.querySelectorAll('a, button')
const moveCursor = (e) => {
    const x = e.clientX
    const y = e.clientY

    customcursor.style.left = `${x}px`
    customcursor.style.top = `${y}px`
}

hoverElements.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        customcursor.classList.add('cursor-hover')
    })
    element.addEventListener('mouseleave', ()=>{
        customcursor.classList.remove('cursor-hover')
    })
});

window.addEventListener('mousemove', moveCursor)