import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedin: true,
      }
    }

    handleClick = () => {
        this.setState((prevState) => {
          return{
            isLoggedin: prevState.isLoggedin === true? false : true,
          }
            
        })
    }

  render() {
    return (
      <NavBarChild 
      isLoggedin={this.state.isLoggedin} 
      handleClick={this.handleClick}/>
    )
  }
}

export default NavBarForm