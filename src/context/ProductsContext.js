import React, { createContext, useState } from 'react';

export const ProductsContext = createContext({
    products: [],
});

export default ({ children }) => {

    const [products, setProducts] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]
    );

    const toggleFavorite = productId => {
        setProducts(prevProducts => {
            const productIndex = prevProducts.findIndex(product => product.id === productId);
            const newFavState = !prevProducts[productIndex].isFavorite;
            const updatedProducts = [...prevProducts];
            updatedProducts[productIndex] = { ...updatedProducts[productIndex], isFavorite: newFavState };
            return updatedProducts;
        })
    }

    return (
        <ProductsContext.Provider value={{ products, toggleFavorite }}>
            {children}
        </ ProductsContext.Provider>
    );
};