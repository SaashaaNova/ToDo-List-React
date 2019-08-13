export const createTodoAction = todo => {
    return (dipatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("todos")
            .add({
                ...todo
            })
            .then(() => {
                dipatch({ type: "CREATE_TODO", todo });
            })
            .catch(err => {
                dipatch({ type: "CREATE_GOAL_TODO", err });
            });
    };
};

export const deleteGoal = id => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("todos")
            .doc(id)
            .delete();
    };
};

export const updateTodo = (updateTodo, id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("todos")
            .doc(id)
            .update({
                ...updateTodo
            });
    };
};

export const getATodo = todoID => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("todos")
            .doc(todoID)
            .get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    dispatch({ type: "GET_TODO", data });
                } else {
                    console.log("does not exist");
                }
            });
    };
};
