
 /*;(function(){
     const btn = document.querySelector('.opcoesDoCartao-remove')
btn.addEventListener('click', function(){
    const cartao =btn.parentNode.parentNode
    cartao.classList.add("cartao--some")
    cartao.addEventListener("transitioned", function(){

        cartao.remove()
    })

})
})()*/
;(function(){
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')
    for (let i = 0; i < btns.length; i++){
btns[i].addEventListener('click', function(){
   const cartao = btns[i].parentNode.parentNode
   cartao.classList.add("cartao--some")
   cartao.addEventListener("transitioned", function(){

       cartao.remove()
   })

})
}
})()
