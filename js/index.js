const products = [
    productFactory(
        1,
        'Raio',
        'https://img.freepik.com/fotos-gratis/novas-rodas-de-liga-leve-em-um-fundo-preto-elegante-e-bonito-autopecas-e-ajuste-automatico_114160-705.jpg?w=740',
        25.00, 'description', 1, 'Pecas'),
    productFactory(
        2, 'Pneu de Carro',
        'https://betoscar.com.br/media/magefan_blog/c/o/comprar_pneus.png', 25.00, 'description', 1, 'Pecas'),
    productFactory(
        3,
        'Motor', 'https://img.wallpapic-br.com/i4091-731-915/thumb/motor-carros-imagem-de-fundo.jpg', 17.00,
        'description', 1, 'Pecas'),
    productFactory(
        4,
        'Poltrona',
        'https://http2.mlstatic.com/D_NQ_NP_828121-MLB26870021426_022018-O.webp',
        25.00, 'description', 1, 'Pecas'),

    productFactory(5, 'Parachoque Dianteiro Ford Ka 2019', '../img/lobo1.jpg', 
    0.0, 'description', 2, 'Acessorios'),
    productFactory(6, 'Pneu de Carro', 'https://betoscar.com.br/media/magefan_blog/c/o/comprar_pneus.png', 
    0.0, 'description', 2, 'Acessorios'),
    productFactory(7, 'Motor', 'https://img.wallpapic-br.com/i4091-731-915/thumb/motor-carros-imagem-de-fundo.jpg', 
    0.0, 'description', 2, 'Acessorios'),
    productFactory(8, 'Legenda', '../img/lobo1.jpg', 
    0.0, 'description', 2, 'Acessorios')
];

function loadProductsInIndex() {
    let sectionPecas = document.querySelector('.section__pecas');
    let sectionAcessorios = document.querySelector('.section__acessorios');

    for (let i in products) {
        let product = products[i];

        if (product.category['id'] === 1) {
            const card = createCard(product);
            sectionPecas.appendChild(card);

        } else if(product.category['id'] === 2) {
            const card = createCard(product);
            sectionAcessorios.appendChild(card);

        }
    };
};

function createCard(product) {
    let card = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('p');
    let button = document.createElement('button');

    img.setAttribute('src', product.urlImage);
    img.setAttribute('title', "imagem");

    title.innerText = product.nameProduct;
    button.innerText = 'COMPRAR';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);

    return card;
};

function productFactory(id, product, url, price, description, idCategory, category) {
    return ({
        id: id,
        nameProduct: product,
        urlImage: url,
        price: price,
        description: description,
        category: {
            id: idCategory,
            nameCategory: category
        }
    });
};

loadProductsInIndex();