import React, { Component } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

class Dashboard extends Component {

    render() {

        return (
            <div>
                <Form />
                <TodoList />
            </div>
        );
    }
}

export default Dashboard;
