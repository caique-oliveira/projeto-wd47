const btn = document.querySelector('#btnMudaLayout') 
function mudaTexto(){
    if(btnMudaLayout.textContent.trim() ==="Linhas"){
        btnMudaLayout.textContent ="Blocos"
    }else{
        btnMudaLayout.textContent="Linhas"

    }
}

btnMudaLayout.addEventListener('click',mudaTexto)
const mural = document.querySelector('.mural')
    function mudaLayout(){

    
    mural.classList.toggle('mural--linha')
}
btn.addEventListener('click', mudaLayout)

btn.classList.remove('no-js')