let pontosAdicionar = 1;
const custoPrimeiroUpgrade = 100;
const custoSegundoUpgrade = 500;
const custoTerceiroUpgrade = 1000;

const valorPrimeiroUpgrade = 1;
const valorSegundoUpgrade = 8;
const valorTerceiroUpgrade = 32;

document.addEventListener("DOMContentLoaded", function () {
    const imagem = document.getElementById("img_monstro");

    imagem.addEventListener("click", adicionarPontos);
});

function adicionarPontos(){
    let elemento = document.getElementById('pontos')
    let pontos = elemento.getHTML();
    let numero = parseInt(pontos) + pontosAdicionar;

    if(numero >= custoPrimeiroUpgrade){
        liberarPrimeiroUpgrade();
    }
    if(numero >= custoSegundoUpgrade){
        liberarSegundoUpgrade();
    }
    if(numero >= custoTerceiroUpgrade){
        liberarTerceiroUpgrade();
    }

    elemento.innerText = `${numero}`;
}

function subtrairPontos(quantidade){
    let elemento = document.getElementById('pontos')
    let pontos = elemento.getHTML();
    let numero = parseInt(pontos) - quantidade;
    elemento.innerText = `${numero}`;
}

function liberarPrimeiroUpgrade(){

}

function liberarSegundoUpgrade(){

}

function liberarTerceiroUpgrade(){

}

function notificarPontosInsuficientes(){
    window.alert("Você não possui pontos suficientes")
}

function verificarPontosSuficientes(custo){
    let elemento = document.getElementById('pontos')
    let pontos = elemento.getHTML();
    let numero = parseInt(pontos);

    if(numero >= custo){
        return true;
    }else{
        notificarPontosInsuficientes();
        return false;
    }
}

function comprarPrimeiroUpgrade(){
    if(verificarPontosSuficientes(custoPrimeiroUpgrade)){
        pontosAdicionar += valorPrimeiroUpgrade;
        subtrairPontos(custoPrimeiroUpgrade);
    }
}

function comprarSegundoUpgrade(){
    if(verificarPontosSuficientes(custoSegundoUpgrade)) {
        pontosAdicionar += valorSegundoUpgrade;
        subtrairPontos(custoSegundoUpgrade);
    }
}

function comprarTerceiroUpgrade(){
    if(verificarPontosSuficientes(custoTerceiroUpgrade)) {
        pontosAdicionar += valorTerceiroUpgrade;
        subtrairPontos(custoTerceiroUpgrade)
    }
}