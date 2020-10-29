import {
    SET_SHOP_PRODUCTS

} from '../actions/types';

const INITIAL_STATE = {
    categories: [], 
    selectedCategoryId: 0,
    productSelected: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                categories: action.payload
            }
        default: return state;
    }
}