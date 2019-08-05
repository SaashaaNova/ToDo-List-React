let todos = [
    { id: 1, todo: "Become a better preson" },
    { id: 2, todo: "Buy milk" }
];

const todoReducer = (state = todos, action) => {
    const { todo } = action;
    switch (action.type) {
        case "CREATE_TODO":
            return [...state, todo];
        default:
            return state;
    }
};
export default todoReducer;
