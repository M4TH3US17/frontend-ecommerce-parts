
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

function createCard(product) {
    let card        = document.createElement('div');
    let title       = document.createElement('h2');
    let img         = document.createElement('img');
    let description = document.createElement('p');
    let button      = document.createElement('button');

    card.classList.add('card');
    img.classList.add('card-image');
    title.classList.add('card-title');
    description.classList.add('card-description');

    img.setAttribute('src',   product.urlImage);
    img.setAttribute('title', product.nameProduct);

    title.innerText       = product.nameProduct;
    description.innerText = `R$ ${product.price.toFixed(2)} | ${product.nameProduct} | ${product.description}`;
    button.innerText      = 'COMPRAR';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    return card;
};

function loadProductsInIndex(page = 0) {
$.ajax ({
        url: "https://ecommerce-matheus.herokuapp.com/api/products/pagination?size=8&page=" + page,
        type: "GET",
        success: function(dados, status) { 
            let sectionPecas      = document.querySelector('.section__pecas');
            let sectionAcessorios = document.querySelector('.section__acessorios');
            console.log(dados);

            for(let product of dados.content) {
                if(status == 'success') {

                    if (product.category['id'] === 1) {
                        const card = createCard(new productFactory(product.id, product.name, product.urlImage, product.price, product.description, product.category.id, product.category.name));
                        sectionPecas.appendChild(card);

                    } else if(product.category['id'] === 2) {
                        const card = createCard(new productFactory(product.id, product.name, product.urlImage, product.price, product.description, product.category.id, product.category.name));
                        sectionAcessorios.appendChild(card);
                    }

            }  else { alert('Houve um erro.'); }
        }
        },
        error: function(){ console.log("Deu Erro"); } 
    });
};

loadProductsInIndex();