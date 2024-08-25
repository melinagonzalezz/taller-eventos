document.addEventListener('DOMContentLoaded', function() {
document.querySelector('div').addEventListener('click', function(click) {
    alert('Hola! Soy el div ☆*:.｡.o(≧▽≦)o.｡.:*☆');

});

document.querySelector('button').addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Hola! (´｡• ᵕ •｡`)');
});
});