document.addEventListener('DOMContentLoaded', () => {
    const botaoNao = document.getElementById('nao');
    const botaoSim = document.getElementById('sim');
    const container = document.querySelector('.container');
    const resposta = document.getElementById('resposta');

    botaoNao.addEventListener('mouseover', () => {
        const largura = window.innerWidth - botaoNao.clientWidth;
        const altura = window.innerHeight - botaoNao.clientHeight;
        let novaPosicaoX = Math.random() * largura;
        let novaPosicaoY = Math.random() * altura;

        // Certifique-se de que o botão "Não" não se sobreponha ao botão "Sim"
        const margemSegura = 50; // Distância mínima entre os botões

        const posicaoSim = botaoSim.getBoundingClientRect();
        const posicaoNao = botaoNao.getBoundingClientRect();

        while (
            novaPosicaoX > posicaoSim.left - margemSegura && novaPosicaoX < posicaoSim.right + margemSegura &&
            novaPosicaoY > posicaoSim.top - margemSegura && novaPosicaoY < posicaoSim.bottom + margemSegura
        ) {
            novaPosicaoX = Math.random() * largura;
            novaPosicaoY = Math.random() * altura;
        }

        botaoNao.style.position = 'absolute';
        botaoNao.style.left = `${novaPosicaoX}px`;
        botaoNao.style.top = `${novaPosicaoY}px`;
    });

    botaoSim.addEventListener('click', () => {
        container.classList.add('oculto');
        document.body.style.backgroundColor = 'red';
        resposta.classList.remove('oculto');
    });
});
