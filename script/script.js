let order = [];
let clickedOrder = [];
let score = 0;

// 0 = Verde, 1 = Vermelho, 2 = Amarelo e 3 = Azul.

// Gera uma ordem randômica de cores

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); /* (min = 0 e max = 4) */
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a proxima cora

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });

}

// Checa se os botões clicado são iguais a ordem gerada

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// Função para captura do clique

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)

   
}

// Função com o intuito de retornar a cor

let createColorElement = (color) => {
    // Switch Case
    if (color == 0) return green;
    if (color = 1) return red;
    if (color = 2) return yellow;
    if (color = 3) return blue;
}

// Função feita para o proximo nível do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função para game over 

let gameOver = () => {
    alert(`Pontuação ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();
}

// Função para inicio do jogo

let playGame = () => {
    alert('Bem vindo ao Gênesis jogador! Iniciando novo jogo!')
    score = 0;

    nextLevel();

}

// Evento de cliques

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Inicia o jogo

playGame();
