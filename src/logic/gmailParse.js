let emailLogged = false;
let checkInterval = null;
let currentObserver = null;

function checkForEmailContent() {
    if (emailLogged) return;

    const paragraphs = document.querySelectorAll('.nH.a98.iY');
    if (paragraphs.length > 0) {
        console.log('Found email content.');
        paragraphs.forEach(p => {
            console.log(p.innerText);
        });
        emailLogged = true;
        if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
        }
        if (currentObserver) {
            currentObserver.disconnect();
            currentObserver = null;
        }
    }
}

function observeDOMChanges() {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (currentObserver) {
        currentObserver.disconnect();
    }

    currentObserver = new MutationObserver(checkForEmailContent);
    currentObserver.observe(document, { childList: true, subtree: true });
}

window.onhashchange = function() {
    console.log('URL hash changed to:', window.location.hash);
    if (window.location.hash.includes('#inbox/')) {
        console.log('Starting to check for email content...');
        emailLogged = false;
        observeDOMChanges();
        if (checkInterval) {
            clearInterval(checkInterval);
        }
        checkInterval = setInterval(checkForEmailContent, 1000);
    } else {
        if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
        }
        if (currentObserver) {
            currentObserver.disconnect();
            currentObserver = null;
        }
    }
}

// Check once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash.includes('#inbox/')) {
        observeDOMChanges();
        checkForEmailContent();
    }
});

// Check on window load for extra assurance
window.onload = function() {
    if (window.location.hash.includes('#inbox/')) {
        observeDOMChanges();
        checkForEmailContent();
    }
};

