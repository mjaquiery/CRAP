// Enter and Space activate focussed pseudobuttons
document.body.addEventListener('keydown', evt=>{
    if (evt.code === 'Enter' || evt.code === 'Space')
        document.activeElement.click();
});

function hashModal() {
    // Navigate to the # location if there is one
    if(window.location.hash) {
        const e = document.querySelector(window.location.hash);
        if(e) {
            if(e.classList.contains('person')) {
                demodalize();
                e.classList.add('modal');
            }
        }
    }
}

window.addEventListener('hashchange', hashModal);
hashModal();
