document.querySelectorAll('div.cube').forEach(element => {
    element.addEventListener('mouseenter', function() {
        if (!element.classList.contains('clicked')) {
            element.classList.add('clicked');
            setTimeout(function() {
                element.classList.remove('clicked');
            }, 500);
        }
    });
});
