let pontosAdicionar = 1;
const custoPrimeiroUpgrade = 50;
const custoSegundoUpgrade = 100;
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
        liberarUpgrade('comprar1');
    }
    if(numero >= custoSegundoUpgrade){
        liberarUpgrade('comprar2');
    }
    if(numero >= custoTerceiroUpgrade){
        liberarUpgrade('comprar3');
    }

    elemento.innerText = `${numero}`;
}

function subtrairPontos(quantidade){
    let elemento = document.getElementById('pontos')
    let pontos = elemento.getHTML();
    let numero = parseInt(pontos) - quantidade;

    if(numero < custoPrimeiroUpgrade){
        bloquearUpgrade('comprar1');
    }

    if(numero < custoSegundoUpgrade){
        bloquearUpgrade('comprar2');
    }

    if(numero < custoTerceiroUpgrade){
        bloquearUpgrade('comprar3');
    }

    elemento.innerText = `${numero}`;
}

function liberarUpgrade(botao){
    let elemento = document.getElementById(botao)
    elemento.classList.remove('bloqueado');
    elemento.classList.add('comprar');
}

function bloquearUpgrade(botao){
    let elemento = document.getElementById(botao)
    elemento.classList.remove('comprar');
    elemento.classList.add('bloqueado');
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
        aumentarPoderClique(valorPrimeiroUpgrade);
        aumentarQuantidadeUpgrades();
    }
}

function comprarSegundoUpgrade(){
    if(verificarPontosSuficientes(custoSegundoUpgrade)) {
        pontosAdicionar += valorSegundoUpgrade;
        subtrairPontos(custoSegundoUpgrade);
        aumentarPoderClique(valorSegundoUpgrade);
        aumentarQuantidadeUpgrades();
    }
}

function comprarTerceiroUpgrade(){
    if(verificarPontosSuficientes(custoTerceiroUpgrade)) {
        pontosAdicionar += valorTerceiroUpgrade;
        subtrairPontos(custoTerceiroUpgrade);
        aumentarPoderClique(valorTerceiroUpgrade);
        aumentarQuantidadeUpgrades();
    }
}

function aumentarPoderClique(quantidade){
    let elemento = document.getElementById('poder_clique')
    let poder = elemento.getHTML();
    let numero = parseInt(poder) + quantidade;

    elemento.innerText = `${numero}`;
}

function aumentarQuantidadeUpgrades(){
    let elemento = document.getElementById('qtd_upgrade')
    let quantidade = elemento.getHTML();
    let numero = parseInt(quantidade) + 1;

    elemento.innerText = `${numero}`;
}