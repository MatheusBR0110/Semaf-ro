const imagem = document.getElementById('img');
const botoes = document.getElementById('buttons');

let indiceCor = 0;
let idIntervalo = null;

// Controla o indice das cores (0,1,2 e volta para 0);
const proximoIndice = () => {
    indiceCor = indiceCor < 2 ? ++indiceCor : 0;
}

//Objeto responsável por: Se a variável for menor do que dois, incremento mais um, se não for menor que dois, vai para zero;
const ligar={
    'red':()=> imagem.src = './img/vermelho.png',
    'yellow':()=> imagem.src = './img/amarelo.png',
    'green':()=> imagem.src = './img/verde.png',
    'automatic':()=> idIntervalo = setInterval(mudarCor,1500)
}

//Altera autmoaticamente as cores do semaforo;
const mudarCor = () => {
    const cores = ['green','yellow' ,'red'];
    const cor = cores[indiceCor];
    ligar[cor]();
    proximoIndice();
}

//Modo autômatico;
const pararAutomatico = () =>{
    clearInterval(idIntervalo);
}

//Escuta o click do mouse nos botoês;
const controlarSemaforo=(event) =>{
    pararAutomatico();
    ligar[event.target.id]();

}
botoes.addEventListener('click', controlarSemaforo);