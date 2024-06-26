document.addEventListener('DOMContentLoaded', () => {
    const botaoNao = document.getElementById('nao');
    const botaoSim = document.getElementById('sim');
    const container = document.querySelector('.container');
    const resposta = document.getElementById('resposta');

    botaoNao.addEventListener('mouseover', () => {
        const largura = window.innerWidth - botaoNao.clientWidth;
        const altura = window.innerHeight - botaoNao.clientHeight;
        const novaPosicaoX = Math.random() * largura;
        const novaPosicaoY = Math.random() * altura;
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
