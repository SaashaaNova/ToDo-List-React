export const createTodoAction = todo => {
    todo.id = Math.random() * 100000000000;
    return {
        type: "CREATE_TODO",
        todo
    };
};
