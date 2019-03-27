function () {
    const btn = document.querySelector('.opcoesDoCartao-remove');
    btn.addEventListener('click', function () {
        const cartao = btn.parentNode.parentNode;
        cartao.classlist.add("cartao--some");
        cartao.addEventListener("transitioned", function () {
            cartao.remove();
        });
    });
}
