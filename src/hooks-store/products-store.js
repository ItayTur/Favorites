import { initStore } from './store';

const configProductsStore = () => {
    const actions = {
        TAGGLE_FAV: (state, productId) => {
            const productIndex = state.products.findIndex(product => product.id === productId);
            const newFavState = !state.products[productIndex].isFavorite;
            const updatedProducts = [...state.products];
            updatedProducts[productIndex] = { ...updatedProducts[productIndex], isFavorite: newFavState };
            return { products: updatedProducts }
        }
    };

    const initState = {
        products: [
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
    };

    initStore(initState, actions);
};

export default configProductsStore;