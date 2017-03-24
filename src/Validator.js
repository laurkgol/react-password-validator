import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super()
    this.state={
    password1: props.password1
    }
  }
  passwordClick(e){
    let firstPassword =  document.getElementById("password1").value
    let secondPassword =  document.getElementById("password2").value
    if(firstPassword === secondPassword){
      alert("Your passwords match!")
    } else{
      alert("Your passwords don't match!")
    }
  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password" id="password1" value={this.state.password1}/>
        <input type="password" placeholder="confirm password"id="password2" value={this.state.password1} />
        <input onClick={(e)=> this.passwordClick(e)}type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
