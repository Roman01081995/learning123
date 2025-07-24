let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkN3ac32LtbkSarTBA_ppldBkTgGJspjDpA&s'
    }
];

for (let i = 0; i < products.length; i++) {
    document.write(
        '<div class="product-card">' +
        '<h3 class="product-title">' + products[i].title + '. Price – ' + products[i].price + '</h3>' +
        '<img src="' + products[i].image + '" alt="" class="product-image">' +
        '</div>'
    );
}