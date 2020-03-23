const initialState = '';

export default function worksFind(state=initialState, action) {
    if (action.type === 'FIND_WORK') {
        return action.payload;
    }

    return state;
}