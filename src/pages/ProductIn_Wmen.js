const savedData = localStorage.getItem("pdata");
const parsed = JSON.parse(savedData);

export const productsIn_Wmen = [
    {
        id: 1,
        name: "Zipper-up",
        price: 1393,
        description: "Casual ware",
        image: "/images/products_Wdress/product1.png",
    },
    {
        id: 2,
        name: "Zipper-up",
        price: 1393,
        description: "Casual ware",
        image: "/images/products_Wdress/product2.png",
    },
    {
        id: 3,
        name: "Zipper-up",
        price: 1393,
        description: "Casual ware",
        image: "/images/products_Wdress/product3.png",
    },
    {
        id: 4,
        name: "halloweenh",
        price: 1393,
        description: "Casual ware",
        image: "/images/products_Wdress/product4.png",
    },
    {
        id: 5,
        name: 'Zipper-up',
        price: 1393,
        description: 'Casual ware',
        image: '/images/products_Wdress/product1.png',
    },
    {
        id: 6,
        name: 'Zipper-up',
        price: 1393,
        description: 'Casual ware',
        image: '/images/products_Wdress/product2.png'
    },
    {
        id: 7,
        name: 'Zipper-up',
        price: 1393,
        description: 'Casual ware',
        image: '/images/products_Wdress/product3.png'
    },
    {
        id: 8,
        name: 'halloweenh',
        price: 1393,
        description: 'Casual ware',
        image: '/images/products_Wdress/product4.png'
    },
    {
        id: 9,
        name: 'halloweenh',
        price: 1393,
        description: 'Casual ware',
        image: '/images/products_Wdress/product4.png'
    },
    {
        id: 19,
        name: parsed.name,
        price: parsed.price,
        description: parsed.description,
        image: parsed.image
    },
];

