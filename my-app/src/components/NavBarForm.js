import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"

export class NavBarForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedin: true,
      }
    }

    handleClick = () => {
        this.setState({
            isLoggedin: false,
        })
    }

  render() {
    return (
      <div className = {css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedin? (
          <div>
            <button onClick={this.handleClick}>Login</button>
          </div>
        ):
        (
        <div>
          <form>
            <label for id='username' name='username'>Username</label>
            <input type='text' id='username' name='username'></input>
            <label for id='passord' name='password'>Password</label>
            <input type='password' id='password' name='password'></input>
            <button onClick={this.state.handleClick}>Submit</button>
          </form>
        </div>
          
          )}
        
      </div>
    )
  }
}

export default NavBarForm