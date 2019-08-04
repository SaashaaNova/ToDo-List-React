let todos = [
    { id: 1, todo: "Become a better preson" },
    { id: 2, todo: "Buy milk" }
];

const createTodo = (state = todos, action) => {
    const { todo } = action;
    switch (action.type) {
        case "CREATE_TODO":
            return [...state, todo];
        default:
            return state;
    }
};
export default createTodo;
