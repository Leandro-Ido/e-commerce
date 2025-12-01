/*
Objetivo 1 - quando clicar no botão de adicionar ao carrinho:
    - atualizar o contador
    - adicionar o produto no localStorage
    - atualizar a tabela HTML do carrinho

Objetivo 2 - remover produtos do carrinho:
    - ouvir o botão de deletar
    - remover do localStorage
    - atualizar o DOM e o total

Objetivo 3 - atualizar valores do carrinho:
    - ouvir mudanças de quantidade
    - recalcular total individual
    - recalcular total geral
*/

const botoesAdicionarAoCarrinho = document.querySelectorAll('.adicionar-ao-carrinho');

botoesAdicionarAoCarrinho.forEach(botao => {
    botao.addEventListener('click', function() {
        const produtoId = this.dataset.produtoId;
        const produtoNome = this.dataset.produtoNome;
        const produtoPreco = parseFloat(this.dataset.produtoPreco);

        // Atualizar o contador de itens no carrinho
        atualizarContadorCarrinho();

        // Adicionar o produto ao localStorage
        adicionarProdutoAoCarrinho(produtoId, produtoNome, produtoPreco);

        // Atualizar a tabela HTML do carrinho
        atualizarTabelaCarrinho();
    });
});
