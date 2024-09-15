function rolardado(){
    return Math.floor(Math.random()*20) + 1;
}
function somardado(){
    var dado = rolardado();
    var modificador = window.prompt('Você vai somar ao resultado?');
    modificador = Number(modificador);
    var mostrar = modificador + dado;
    document.write(`O resultado do seu dado é ${mostrar}`);
    
}

