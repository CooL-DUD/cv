function managePercent(){
    let elements = document.querySelectorAll('.percent')
    elements.forEach(e => {
        e.querySelector('.fill').style.width = `${e.dataset.percent}%`
    })
}
window.onload = function (){
    managePercent()
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 43.235102, lng: 76.909506 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;

function changeTheme(){
    document.querySelectorAll('.headerText,.descriptionText,.info__value,.option,.extraSkills__item,body,.header,.about,.sidebar,.services__item,.copyright,.themeBtn').forEach(e => {
        e.classList.toggle('darkTheme')
    })
}
const hiddenElems = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting){
            e.target.classList.add('show')
        } else {
            e.target.classList.remove('show')
        }
    })
})

hiddenElems.forEach(e => observer.observe(e))