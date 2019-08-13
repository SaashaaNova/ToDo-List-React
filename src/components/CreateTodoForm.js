import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodoAction } from "../store/actions/createTodo";
import Form from "./form";
import styled from "styled-components";

const FormWrapper = styled.div`
    width: 100%;
    margin-top: 7rem;
`;


class CreateTodoForm extends Component {
    state = {
        todo: ""
    };

    handleChange = value  => {
        this.setState({ todo: value });
    };

    getTodo = e => {
        e.preventDefault();
        this.props.createTodo(this.state);
        this.setState({ todo: "" });
    };

    render() {
        return (
            <FormWrapper>
                <Form
                    formAction={this.getTodo} 
                    value={this.state.todo}
                    handleChange={this.handleChange}
                    btnName={`Add Button`}
                />
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
)(CreateTodoForm);
