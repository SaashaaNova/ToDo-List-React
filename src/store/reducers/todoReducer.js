const getTodo = (state = {}, action) => {
    const { data } = action;
    switch (action.type) {
        case "GET_TODO":
            return {
                ...state,
                data
            };
        default:
            return state;
    }
};
export default getTodo;
