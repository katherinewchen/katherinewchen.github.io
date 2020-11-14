$(".toggle").click(function() {
    $('header').toggleClass('show-menu');
});

new Vue({
    el: '#products',
    data: {
        products: [
            {
                name: 'Straw',
                img: 'images/product-straw.png',
                desc: 'A set of reusable metal straws',
                price: '$10.00',
            },
            
            {
                name: 'Mesh Bag',
                img: 'images/mesh-bag.jpg',
                desc: 'A reusable mesh bag for groceries.',
                price: '$7.00',
            },
        
            {
                name: 'Food Wrap',
                img: 'images/product-wrap.jpg',
                desc: 'Beeswax food wraps.',
                price: '$10.00',
            },
        
            {
                name: 'Water Bottle',
                img: 'images/water-bottle.jpg',
                desc: 'A stainless steel metal water bottle.',
                price: '$15.00',
            },
        
            {
                name: 'Mason Jar',
                img: 'images/mason.jpg',
                desc: 'An assortment of mason jars to store food and spices.',
                price: '$15.00',
            },
        
            {
                name: 'Face Mask',
                img: 'images/mask.jpg',
                desc: 'Reusable and washable cloth face masks.',
                price: '$6.00',
            }
        ]
    }
})