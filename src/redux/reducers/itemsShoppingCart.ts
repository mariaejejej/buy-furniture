import { SET_ITEMS_SHOPPING_CART } from "../action-creators/action-list.ts";
import { getDefaultState } from "../state/state.ts";

const setItemsShoppingCart = (action, state) => {
    return action.itemsShoppingCart || state
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any = getDefaultState().itemsShoppingCart, action: { type: string }) => {
    const actions = {
        [SET_ITEMS_SHOPPING_CART]: setItemsShoppingCart,
       
    };
    return actions[action.type] ? actions[action.type](action, state) : state;
}