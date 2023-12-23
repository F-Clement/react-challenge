import React from 'react'
import css from "./css/NavBarSimple.module.css"

function NavBarChild(props) {
  return (
    <div className = {css.NavBar}>
    <h1>My Gallery</h1>
    {props.isLoggedin? (
      <div>
        <button onClick={props.handleClick}>Login</button>
      </div>
    ):
    (
    <div>
      <form>
        <label for id='username' name='username'>Username</label>
        <input type='text' id='username' name='username'></input>
        <label for id='password' name='password'>Password</label>
        <input type='password' id='password' name='password'></input>
        <button onClick={props.handleClick}>Submit</button>
      </form>
    </div>
      
      )}
    
  </div>
  )
}

export default NavBarChild