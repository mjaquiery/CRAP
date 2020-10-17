/**
 * Remove modals
 */
function demodalize() {
    document.querySelectorAll('.modal')
        .forEach(e => e.classList.remove('modal'));
}

/**
 * Activate modal for clicked element
 * @param event {MouseEvent} click
 */
function modalize(event) {
    if (!event.currentTarget)
        return;

    // remove modal from others
    demodalize();

    // Only open the modal if we're clicking on something other than the border.
    if(event.currentTarget != event.target)
        event.currentTarget.classList.add('modal');
}

// add modalize click events
document.querySelectorAll('.person')
    .forEach(p => p.addEventListener('click', modalize));
document.querySelectorAll('.close')
    .forEach(c => c.addEventListener('click', (e)=>{
        demodalize();
        e.stopPropagation();
    }));
