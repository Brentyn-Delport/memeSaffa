// productsData.js

import { Form } from "react-router-dom";

import memeFront1 from '../Images/1memeFront.jpeg';
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
        image: memeFront1,
        hoverImage: memeBack1,
        description: 'Race Week?',
        color: 'White',
        price: 100,
    },
    
    {
        id: 2,
        image: memeFront2,
        hoverImage: memeBack2,
        description: 'Red Bull Dominance',
        color: 'White',
        price: 100,
    },

    {
        id: 3,
        image: memeFront3,
        hoverImage: memeBack3,
        description: 'Alonso Retiring?',
        color: 'White',
        price: 100,
    },

    {
        id: 4,
        image: memeFront4,
        hoverImage: memeBack4,
        description: 'Ferrari Fan?',
        color: 'White',
        price: 100,
    },

    {
        id: 5,
        image: memeFront5,
        hoverImage: memeBack5,
        description: 'Merc Engineers',
        color: 'White',
        price: 100,
    },

    {
        id: 6,
        image: memeFront6,
        hoverImage: memeBack6,
        description: 'Red Bull Dominance',
        color: 'White',
        price: 100,
    },

    {
        id: 7,
        image: memeFront7,
        hoverImage: memeBack7,
        description: 'Abu Dhabi 21',
        color: 'White',
        price: 100,
    },

    {
        id: 8,
        image: memeFront8,
        hoverImage: memeBack8,
        description: 'McClaren no no',
        color: 'White',
        price: 100,
    },

    {
        id: 9,
        image: memeFront9,
        hoverImage: memeBack9,
        description: 'Blah',
        color: 'White',
        price: 100,
    },

    {
        id: 10,
        image: memeFront10,
        hoverImage: memeBack10,
        description: 'Ferarri Fan',
        color: 'White',
        price: 100,
    },

    {
        id: 11,
        image: memeFront11,
        hoverImage: memeBack11,
        description: 'Albert TOTO Einstein',
        color: 'White',
        price: 100,
    },

];

export default products;
