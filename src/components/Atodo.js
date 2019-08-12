import React from "react";
import Form from "./form";
import { connect } from "react-redux";
import { getATodo, updateTodo } from "../store/actions/createTodo";

class singleTodo extends React.Component {
    state = {
        todo: ""
    };

    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.getATodo(id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getATodoData !== prevProps.getATodoData) {
            const todo = this.props.getATodoData.data;
            this.setState({ todo: todo.todo });
        }
    }

    handleChange = value => {
        this.setState({ todo: value });
    };

    updateTodo = e => {
        e.preventDefault();
        this.props.updateTodo(this.state, this.props.match.params.id);
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <div className="center">
                    <h4>Change todo</h4>
                    <div className="container">
                        <Form
                            value={this.state.todo}
                            btnName={`Update todo`}
                            handleChange={this.handleChange}
                            formAction={this.updateTodo}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getATodo: id => {
            dispatch(getATodo(id));
        },
        updateTodo: (updatedTodo, id) => {
            dispatch(updateTodo(updatedTodo, id));
        }
    };
};
const mapStateToProps = state => {
    return {
        getATodoData: state.getTodo
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(singleTodo);
