;(function(){
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click", function(){
        const ajudas = [{conteudo : "Bem vindo ao ceep", cor : "#f05450"},{conteudo : 
            "Clique no botão linhas para alterar o layout", cor: "#92C4EC"}
        ]
        ajudas.forEach(function(ajuda){
            adicionaCartaoMural(ajuda)

        })
    })
    btnAjuda.classList.remove('no-js')


})()