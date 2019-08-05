import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TodoList = (props) => {
    const {todo} = props
    let todos;
    if(todo) {
        todos = todo.map(todo => {
            return (
                <li key={todo.id}>
                    {todo.todo}
                    <Link to="/">
                        <i>edit</i>
                    </Link>
                    <Link to="/">
                        <i>delete</i>
                    </Link>
                </li>
            );
        });
    } 
    return (
        <div>
            <ul>{todos}</ul>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        todo: state.todos
    };
};
export default connect(mapStateToProps)(TodoList);
