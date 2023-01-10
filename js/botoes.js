const btnInicio = document.getElementById("home-btn");

// opcões section 

const btnTexto = document.getElementById("btn-texto")

const btnVoltar = document.querySelector(".btnVoltar")


function iniciar(){

    // play();
    document.querySelector(".container__home").style.display = "none";
    document.querySelector(".container-opcoes").classList.remove("ativo");


    
}

function readMe(){

    document.querySelector(".container-opcoes").classList.add("ativo");
    document.querySelector(".container-read-me").classList.remove("ativo")

}

function dedicacoes(){
    document.querySelector(".container-opcoes").classList.add("ativo");
    document.querySelector(".container-dedicacoes").classList.remove("ativo")
}

function agradecimento(){
    document.querySelector(".container-opcoes").classList.add("ativo");
    document.querySelector(".container-youMakeMe").classList.remove("ativo")
}

function btnVoltarQuotes(){

    document.querySelector(".container-dedicacoes").classList.add("ativo")
    document.querySelector(".container-opcoes").classList.remove("ativo");


}

function btnVoltarYouMakeMe(){

    document.querySelector(".container-youMakeMe").classList.add("ativo")
    document.querySelector(".container-opcoes").classList.remove("ativo");


}

function btnVoltarLetter(){

    document.querySelector(".container-read-me").classList.add("ativo")
    document.querySelector(".container-opcoes").classList.remove("ativo");


}