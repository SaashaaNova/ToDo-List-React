import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(
    faEdit, 
    faTrashAlt 
);

const TodoListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
`

const Todo = styled.li`
    list-style: none;
    min-width: 60rem;
    height: 3rem;
    font-size: 1.8rem;
    margin-top: 2rem;
    border-bottom: 1px solid slateblue;
    position: relative;
    box-shadow: 0 6px 4px -4px #ccd9e3;
    padding: 0 6px;

    .edit {
        position: absolute;
        right: 45px;
        color: slateblue;
    }

    .trash{
        position: absolute;
        right: 15px;
        color: slateblue;
    }

`

const TodoList = (props) => {
    const {todo} = props
    let todos;
    if(todo) {
        todos = todo.map(todo => {
            return (
                <Todo key={todo.id}>
                    {todo.todo}
                    <Link className='edit' to="/">
                        <FontAwesomeIcon icon='edit' />
                    </Link>
                    <Link className='trash' to="/">
                        <FontAwesomeIcon icon='trash-alt' />
                    </Link>
                </Todo>
            );
        });
    } 
    return (
        <TodoListWrapper>
            <ul className='todo-list'>{todos}</ul>
        </TodoListWrapper>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        todo: state.todos
    };
};
export default connect(mapStateToProps)(TodoList);
