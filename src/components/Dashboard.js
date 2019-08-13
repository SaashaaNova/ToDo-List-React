import React, { Component } from "react";
import TodoList from "./TodoList";
import CreateTodoForm from "./CreateTodoForm";

class Dashboard extends Component {

    render() {

        return (
            <div>
                <CreateTodoForm />
                <TodoList />
            </div>
        );
    }
}

export default Dashboard;
