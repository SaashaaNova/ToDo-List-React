import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodoAction } from "../store/actions/createTodo";
import styled from "styled-components";

const FormWrapper = styled.div`
    width: 100%;
    margin-top: 7rem;
`;

const TodoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 70%;
    height: 4rem;
    background: none;
    border: none;
    border-bottom: 3px solid orangered;
    font-size: 1.8rem;
    padding-left: 1rem;
    margin-bottom: 0;
    font-family: "Red Hat Display", sans-serif;

    :focus {
        outline: none;
    }
`;

const Button = styled.button`
    margin-top: 3rem;
    width: 10rem;
    height: 5rem;
    border-radius: 50px;
    background: orangered;
    font-size: 1.8rem;
    font-family: "Red Hat Display", sans-serif;
`;

class Form extends Component {
    state = {
        todo: ""
    };

    handleChange = e => {
        this.setState({ todo: e.target.value });
    };

    getTodo = e => {
        e.preventDefault();
        this.props.createTodo(this.state);
        this.setState({ todo: "" });
    };

    render() {
        return (
            <FormWrapper>
                <TodoForm onSubmit={this.getTodo}>
                    <Input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.todo}
                        required
                        placeholder="add new todo"
                    />
                    <Button>Add Todo</Button>
                </TodoForm>
            </FormWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTodo: todo => dispatch(createTodoAction(todo))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Form);
