// productsData.js

import { Form } from "react-router-dom";

import memeFront from '../Images/memeFront.jpeg';
import memeBack1 from '../Images/1memeBack.jpeg';
import memeBack2 from '../Images/2memeBack.jpeg';
import memeBack3 from '../Images/3memeBack.jpeg';
import memeBack4 from '../Images/4memeBack.jpeg';
import memeBack5 from '../Images/5memeBack.jpeg';
import memeBack6 from '../Images/6memeBack.jpeg';
import memeBack7 from '../Images/7memeBack.jpeg';
import memeBack8 from '../Images/8memeBack.jpeg';
import memeBack9 from '../Images/9memeBack.jpeg';
import memeBack10 from '../Images/10memeBack.jpeg';
import memeBack11 from '../Images/11memeBack.jpeg';

const products = [
    // Array of product objects
    {
        id: 1,
        image: memeFront,
        hoverImage: memeBack1,
        description: 'One Brandy?',
        color: 'White',
        price: 100,
    },
    
    {
        id: 2,
        image: memeFront,
        hoverImage: memeBack2,
        description: 'Tenderprenuer?',
        color: 'White',
        price: 100,
    },

    {
        id: 3,
        image: memeFront,
        hoverImage: memeBack3,
        description: 'You all get loadshedding!?',
        color: 'White',
        price: 100,
    },

    {
        id: 4,
        image: memeFront,
        hoverImage: memeBack4,
        description: 'Eskom Se...!',
        color: 'White',
        price: 100,
    },

    {
        id: 5,
        image: memeFront,
        hoverImage: memeBack5,
        description: 'Tannie',
        color: 'White',
        price: 100,
    },

    {
        id: 6,
        image: memeFront,
        hoverImage: memeBack6,
        description: 'Dezemba',
        color: 'White',
        price: 100,
    },

    {
        id: 7,
        image: memeFront,
        hoverImage: memeBack7,
        description: 'Now Now',
        color: 'White',
        price: 100,
    },

    {
        id: 8,
        image: memeFront,
        hoverImage: memeBack8,
        description: 'Bunny',
        color: 'White',
        price: 100,
    },

    {
        id: 9,
        image: memeFront,
        hoverImage: memeBack9,
        description: 'Braai?',
        color: 'White',
        price: 100,
    },

    {
        id: 10,
        image: memeFront,
        hoverImage: memeBack10,
        description: 'Eskom Engineers',
        color: 'White',
        price: 100,
    },

    {
        id: 11,
        image: memeFront,
        hoverImage: memeBack11,
        description: 'Robots',
        color: 'White',
        price: 100,
    },

];

export default products;
