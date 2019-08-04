import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TodoList = props => {
    let todos = props.goal;
    let todo;
    todos.length === 0
        ? (todo = <h5>There are no tasks. Add a new one now!</h5>)
        : (todo = todos.map(todo => {
              return (
                  <li lassName="collection-item" key={todo.id}>
                      {todo.todo}
                      <Link to="/">
                          <i>edit</i>
                      </Link>
                      <Link to="/">
                          <i>delete</i>
                      </Link>
                  </li>
              );
          }));
    return (
        <div>
            <ul>{todo}</ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todo: state.todos
    };
};
export default connect(mapStateToProps)(TodoList);
