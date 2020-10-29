const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const cartMenu = (cart) => {
    return {
        type: 'MENU_CART',
        cartMenu: cart
    }
}

const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        item
    }
}

const removeFromCart = (deleteItem, minus = '') => {
    return {
        type: 'REMOVE_FROM_CART',
        deleteItem,
        price: +deleteItem.price,
        minus 
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    cartMenu,
    addToCart,
    removeFromCart
}