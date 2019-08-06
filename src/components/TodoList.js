import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(
    faEdit, 
    faTrashAlt 
);

const TodoList = (props) => {
    const {todo} = props
    let todos;
    if(todo) {
        todos = todo.map(todo => {
            return (
                <li key={todo.id}>
                    {todo.todo}
                    <Link to="/">
                        <FontAwesomeIcon icon='edit' />
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon icon='trash-alt' />
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
