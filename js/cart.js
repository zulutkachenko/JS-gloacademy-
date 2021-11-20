const cart = function() {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const cartClose = cart.querySelector('.modal-close');


    cartBtn.addEventListener('click', function() {
        cart.style.display = 'flex';
    });

    cartClose.addEventListener('click', function() {
        cart.style.display = '';
    });
}

cart();