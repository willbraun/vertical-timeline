const getElementX = function(element) {
    return element.getBoundingClientRect().left;
}

const getElementTop = function(element) {
    return element.getBoundingClientRect().top;
}

const getElementBottom = function(element) {
    return element.getBoundingClientRect().bottom;
}

const checkIfOnPage = function(element) {
    return (getElementBottom(element) > 0 && getElementTop(element) < window.innerHeight);
}

const checkForNewRow = function() {
    $eventRows.forEach(eventRow => {
        if (eventRow.classList.contains('slide-left') || eventRow.classList.contains('slide-right') || eventRow.classList.contains('initial')) return;
        
        if (checkIfOnPage(eventRow.querySelector('.event'))) {
            if (getElementX(eventRow.querySelector('.event')) < window.innerWidth * 0.5) {
                eventRow.classList.add('slide-right');
            }
            else {
                eventRow.classList.add('slide-left');
            }
        }
    });
}

const loadInitial = function() {
    $eventRows.forEach(eventRow => {
        checkIfOnPage(eventRow) ? eventRow.classList.add('initial') : null;
    })
}

$eventRows = document.querySelectorAll('.event-row');
$events = document.querySelectorAll('.event');
$icons = document.querySelectorAll('.icon');
$events.forEach(event => event.querySelector('button').addEventListener('click', function() {event.classList.toggle('expand')}));

loadInitial();
window.addEventListener('scroll', function() {
    checkForNewRow();
});