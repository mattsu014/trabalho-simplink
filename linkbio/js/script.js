document.getElementById('change-theme').addEventListener('click', function() {
    document.body.classList.add('fade-out', 'light-flash');
    
    setTimeout(function() {
        window.location.href = 'alternative/alternative.html';
    }, 1000);
});
