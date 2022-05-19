$events = document.querySelectorAll('.event');
$events.forEach(event => event.querySelector('button').addEventListener('click', function() {event.classList.toggle('expand')}));

checkForNew();
window.addEventListener('scroll', function(e) {
    checkForNew();
});


// helpers
const getElementX = function(element) {
    return element.getBoundingClientRect().left;
}

const getElementY = function(element) {
    return element.getBoundingClientRect().top;
}

const checkForNew = function () {
    $events.forEach(event => {
        console.log(event.classList.contains('event'));
        if (event.classList.contains('slide-left') || event.classList.contains('slide-right')) return;
        
        console.log(getElementY(event));
        console.log(window.innerHeight);
        if (getElementY(event) < window.innerHeight) {
            if (getElementX(event) < window.innerWidth * 0.5) {
                event.classList.add('slide-left');
            }
            else {
                event.classList.add('slide-right');
            }
        }
    });
}


// window.innerHeight
// if y position of element is greater than the viewport height, add class for animation. if less than, remove

