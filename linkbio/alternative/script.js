document.getElementById('change-theme').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    
    setTimeout(function() {
        window.location.href = '../index.html';
    }, 1000);
});
