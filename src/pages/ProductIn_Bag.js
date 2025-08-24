const savedData = localStorage.getItem("prdata");
const parsed = JSON.parse(savedData);

export const ProductIn_Bag = [
    {
        id:1,
        name:'Zipper-up',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product1.png',
    },
    {
        id:2,
        name:'Zipper-up',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product2.png'
    },
    {
        id:3,
        name:'Zipper-up',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product3.png'
    },
    {
        id:4,
        name:'halloweenh',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product4.png'
    },
    {
        id:5,
        name:'Zipper-up',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product1.png',
    },
    {
        id:6,
        name:'Zipper-up',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product2.png'
    },
    {
        id:7,
        name:'Zipper-up',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product3.png'
    },
    {
        id:8,
        name:'halloweenh',
        price:1393,
        description: 'Casual Bag',
        image:'/images/products_Bags/product4.png'
    },
    {
        id:9,
        name:parsed.name,
        price:parsed.price,
        description: parsed.description,
        image:parsed.image,
    },
      ]

