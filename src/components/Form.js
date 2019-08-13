import React from "react";
import styled from "styled-components";

const TodoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 50%;
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
    width: 13rem;
    height: 5rem;
    border-radius: 50px;
    background: orangered;
    font-size: 1.8rem;
    font-family: "Red Hat Display", sans-serif;
    font-weight: bold;
    cursor: pointer;
    color: white;
    border: none;
`;

export default function Form(props) {
    return (
        <TodoForm onSubmit={props.formAction}>
            <Input
                type="text"
                onChange={e => { props.handleChange(e.target.value) } }
                value={props.value}
                required
                placeholder="add new todo"
            />
            <Button onClick={props.formAction}> {props.btnName}</Button>
        </TodoForm>
    );
}
