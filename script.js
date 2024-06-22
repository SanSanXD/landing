document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navPopup = document.getElementById('navPopup');

    navToggle.addEventListener('click', function() {
        if (navPopup.style.display === 'none') {
            navPopup.style.display = 'block';
        } else {
            navPopup.style.display = 'none';
        }
    });


    window.addEventListener('click', function(event) {
        if (event.target !== navPopup && event.target !== navToggle && !navToggle.contains(event.target)) {
            navPopup.style.display = 'block';
        }
    });
});