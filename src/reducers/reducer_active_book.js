import {BOOK_SELECTED} from "../actions";

export default (state = null, action) => {
    switch (action.type) {
        case BOOK_SELECTED:
            return action.payload;
        default:
            return state;
    }
}