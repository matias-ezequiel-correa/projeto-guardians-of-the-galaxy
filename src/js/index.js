const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/galaxia_btn1.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/galaxia_btn2.png")
    }
}); 

const searchBar = document.querySelector('.search-bar input');
const cards = document.querySelectorAll('.listagem-personagens .cartao-guardiao');


searchBar.addEventListener('input', function () {
    const termoPesquisa = searchBar.value.toLowerCase();

    cards.forEach(card => {
        const nomePersonagem = card.querySelector('.informacoes span:first-child').textContent.toLowerCase();
        if (nomePersonagem.includes(termoPesquisa)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});