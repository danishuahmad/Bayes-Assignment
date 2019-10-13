import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="menu-bar">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            <NavLink to="/">Tournaments</NavLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}