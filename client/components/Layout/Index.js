import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'

class Layout extends Component {
    render() {
        //    get all props
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={matchProps => (
                <div>
                    <Header {...matchProps} />
                    <Component {...matchProps} />
                </div>
            )}/>
        )
    }
}

export default Layout;