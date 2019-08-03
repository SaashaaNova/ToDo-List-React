import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos }) => {
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
export default TodoList;
