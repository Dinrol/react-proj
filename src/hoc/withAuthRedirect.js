import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends Component{
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}