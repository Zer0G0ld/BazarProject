// Função para adicionar produto ao carrinho
function addToCart(productName) {
    // Verifica se já existe um carrinho na localStorage
    let cart = localStorage.getItem('cart');
    if (!cart) {
        // Se não existir, cria um carrinho vazio
        cart = [];
    } else {
        // Se existir, converte a string em um array
        cart = JSON.parse(cart);
    }

    // Adiciona o nome do produto ao carrinho
    cart.push(productName);

    // Atualiza o carrinho na localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mensagem de sucesso
    console.log('Produto adicionado ao carrinho:', productName);

    // Exemplo: atualiza o número de itens no carrinho na interface do usuário
    updateCartItemCount(cart.length);
}

// Função para atualizar o número de itens no carrinho na interface do usuário
function updateCartItemCount(count) {
    const cartItemCountElement = document.getElementById('cart-item-count');
    if (cartItemCountElement) {
        cartItemCountElement.textContent = count;
    }
}
