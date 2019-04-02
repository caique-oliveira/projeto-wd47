;(function(){
    const form = document.querySelector(".formNovoCartao")
    let numeroDoCartao = 0

    form.addEventListener("submit", function(event){
        event.preventDefault()
        const textarea = document.querySelector(".formNovoCartao-conteudo")
        const isTextAreaVazio = textarea.value.trim().length === 0
        const conteudoDoCartao = textarea.value
        if (isTextAreaVazio){
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "formulário inválido. Não digite vários nada!"

            const btnSubmit = form.children[form.children.length-1]
            form.addEventListener("animationed", function(event){
                event.target.remove()

            })
            form.insertBefore(msgErro, btnSubmit)
        }else{
            window.adicionaCartaoMural({conteudo:textarea.value})
        }  
    })
    form.classList.remove("no-js")
})()
