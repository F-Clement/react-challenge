import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status:"login",
            message:"Hello Guest!",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps)=>{
            console.log("Previous State:", prevState)
            console.log("previous Props", prevProps)

            return {
                message: prevState.message === "Hello Guest!"? "Welcome back Guest" : "Hello Guest!",
                status: prevState.status === "login" ? "Logout" : "login",

            }

        })

        
    console.log(this.state.status)
        console.log(this.state.message)
    }

    render() {
        return(
            <div className = {css.NavBar}>
                <span><h1>{this.state.message}</h1></span>
                <button onClick={() => this.handleClick()}>{this.state.status}</button>
            </div>
        )
    }

}

export default NavBarSimple