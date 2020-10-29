const initialState = {
    menu: [],
    loading: true,
    cart: {},
    items: [],
    total: 0,
    error: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
            }
        case 'MENU_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'MENU_CART':
            return {
                ...state,
                loading: false,
                cart: action.cartMenu
            }
        case 'ADD_TO_CART':
            const itemUnique = action.item;
            const indexItem = state.items.findIndex(item => item.id === itemUnique.id)
            
            // item was in basket
            if (indexItem >= 0) {

                const itemInState = state.items.find(item => item.id ===itemUnique.id )
                const itemInMenuState = state.menu.find(item => item.id ===itemUnique.id )
                const newItem = {
                    ...itemInState,
                    priceTotal: itemInState.priceTotal += itemInMenuState.price,
                    qtty: ++itemInState.qtty,
                }

                const arrWithoutItem = state.items.filter(item => item.id !== action.item.id)

                return {
                    ...state,
                    items: [...arrWithoutItem, newItem],
                    total: state.total += itemUnique.price
                }
            }

            // item was not in basket
            const item = state.menu.find(item => item.id === itemUnique.id);
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    priceTotal: item.price,
                    qtty: 1
                };
            
            return {
                ...state,
                items: [...state.items, newItem],
                total: state.total += action.item.price
            }
            
        case 'REMOVE_FROM_CART':
            const itemInState = state.items.find(item => item.id ===action.deleteItem.id )
            
            if (action.minus === 1) {
                
                const itemInMenuState = state.menu.find(item => item.id ===action.deleteItem.id )
                const newItem = {
                    ...itemInState,
                    priceTotal: itemInState.priceTotal -= itemInMenuState.price,
                    qtty: --itemInState.qtty

                }
                const arrWithItem = state.items.filter(item => item.id !== action.deleteItem.id)
                
                return {
                    ...state,
                    items: [...arrWithItem, newItem],
                    total: state.total - action.price
                }
            }
            return {
                ...state,
                items: state.items.filter(item => item !== action.deleteItem),
                total: state.total -= itemInState.priceTotal
        }
        default:
            return state;
    }
        
}
export default reducer;