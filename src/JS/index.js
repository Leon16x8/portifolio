/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abris os projetos que estão escondidos no html
        
        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão

        Passo 3 - adicionar a classe "ativo" dos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abris os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

document.body.addEventListener("mousemove", function(e) {
				
    var curX = e.clientX;
    var curY = e.clientY;
        
    document.getElementById('mouse').style.left = curX - 10 + 'px';
    document.getElementById('mouse').style.top = curY - 10 + 'px';
}); //Quadrado do mouse

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoEsconderProjetos = document.querySelector('.btn-mostrar-menos');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarProjetos();
    escondezrBtnMostrarMais();
    mostrarBtnMenos();
});

botaoEsconderProjetos.addEventListener('click', () => {
    esconderBtnMenos();
    esconderProjetos();
    mostrarBtnMostrarMais();
})

function escondezrBtnMostrarMais() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarBtnMostrarMais() {
    botaoMostrarProjetos.classList.remove('remover');
}

function esconderBtnMenos() {
    botaoEsconderProjetos.classList.remove('mostrarBtnMeno');
}

function mostrarBtnMenos() {
    botaoEsconderProjetos.classList.add('mostrarBtnMeno');
}

function esconderProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.remove('ativo');
    })
}

function mostrarProjetos() {''
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}



