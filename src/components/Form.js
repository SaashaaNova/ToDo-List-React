import React, { Component } from "react";
import {connect} from "react-redux";
import {createTodoAction} from "../store/actions/createTodo";

class Form extends Component {

state = {
  todo: ''
 }

handleChange = e => {
    this.setState({ todo: e.target.value })
}

getTodo = e => {
  e.preventDefault()
  if(this.state.todo !== ''){
   this.props.addATodo(this.state)
   this.setState({ todo: '' })
  }
}


render(){
  return(
   <div>
     <div>
       <form onSubmit={ this.getTodo }>
        <input type="text"  
         onChange={ this.handleChange } 
         value={ this.state.todo }
         required />
        <div>
         <button onClick={ this.getTodo }>Add todo</button>
        </div>
       </form>
     </div>
   </div>
  )
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo) => {dispatch(createTodoAction(todo))}
  }
}
export default connect(null, mapDispatchToProps)(Form)