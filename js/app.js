let totalJogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${totalJogosAlugados}`);
}

function alterarStatus(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name');
    


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            totalJogosAlugados--;
        } 
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        totalJogosAlugados++;
    }

    contarEExibirJogosAlugados();
    
}

document.addEventListener('DOMContentLoaded', function() {
    totalJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});