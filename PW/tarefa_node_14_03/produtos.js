const produtos = [  //esses produtos sao de uma loja de videogames
    { "id": 1, "nome": "PlayStation 5", "preco": 4500.00, "categoria": "Console" },
    { "id": 2, "nome": "Xbox Series X", "preco": 4300.00, "categoria": "Console" },
    { "id": 3, "nome": "Nintendo Switch OLED", "preco": 2700.00, "categoria": "Console" },
    { "id": 4, "nome": "Controle DualSense", "preco": 500.00, "categoria": "Acessório" },
    { "id": 5, "nome": "Controle Xbox Elite Series 2", "preco": 1200.00, "categoria": "Acessório" },
    { "id": 6, "nome": "The Legend of Zelda: Tears of the Kingdom", "preco": 349.00, "categoria": "Jogo" },
    { "id": 7, "nome": "God of War Ragnarok", "preco": 300.00, "categoria": "Jogo" },
    { "id": 8, "nome": "Headset Gamer HyperX Cloud II", "preco": 500.00, "categoria": "Acessório" },
    { "id": 9, "nome": "Spider-Man 2 (PS5)", "preco": 300.00, "categoria": "Jogo" },
    { "id": 10, "nome": "Cadeira Gamer DXRacer", "preco": 1500.00, "categoria": "Acessório" }
];

function mapNome() {
    return produtos.map(produto => produto.nome);
}

function filterPrecoXbox() {
    return produtos.filter(produto => produto.preco === 4300);
}


function reduceTotalEstoque() {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
}

export default{
    produtos,
    mapNome,
    filterPrecoXbox,
    reduceTotalEstoque
}