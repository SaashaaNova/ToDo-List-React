import React, { Component } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

class Dashboard extends Component {
    state = {
        todos: [
            { id: 1, todo: "Become a better preson" },
            { id: 2, todo: "Buy milk" }
        ]
    };

    addATodo = todos => {
        todos.id = Math.random() * 100000000000;
        let todo = [...this.state.todos, todos];
        this.setState({
            todos: todo
        });
    };

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <Form addATodo={this.addATodo} />
                <TodoList todos={todos} />
            </div>
        );
    }
}

export default Dashboard;
