import React, { Component } from 'react';
import { Switch } from 'react-router-dom'; //Route
import Layout from '../components/Layout/Index';
import Home from '../components/Home/Index';
import TournamentDetail from '../components/TournamentDetail/Index';

class Routes extends Component {

    render() {
        return(
            <Switch>
                <Layout path={"/"} exact component={Home} />
                <Layout path={"/tournament/:tournament_id"} exact component={TournamentDetail} />
            </Switch>
        );
    }
}

export default Routes;
