import PersonIcon from "@mui/icons-material/Person";

const savedData = localStorage.getItem("pData");
const data = JSON.parse(savedData);


export const ProductIn_Mmen =[
      {
        id:1,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product1.jpg'
    },
    {
        id:2,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product2.jpg'
    },
    {
        id:3,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product3.jpg'
    },
    {
        id:4,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product4.jpg'
    },
      {
        id:5,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product1.jpg'
    },
    {
        id:6,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product2.jpg'
    },
    {
        id:7,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product3.jpg'
    },
    {
        id:8,
        name:'halloweenh',
        price:1393,
        description: 'Casual ware',
        image:'/images/products_Mdress/product4.jpg'
    },
    {
        id:11,
        name:data.name,
        price:data.price,
        description:data.description,
        image:data.image
    },
]