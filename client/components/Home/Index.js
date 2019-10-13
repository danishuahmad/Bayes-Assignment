import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Tournaments from '../Tournaments/Index';
import Filters from '../Filters/Index';
import Controls from '../Filters/Controls';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            show_filters: false,
            filters: {},
            tournaments: []
        }
    }
    showFilters = () => {
        this.setState({show_filters: true})
    };
    hideFilters = () => {
        this.setState({show_filters: false})
    };
    applyFilter = (filters) => {
        this.setState({filters,show_filters: false})
    }

    render() {
        const {show_filters,filters} = this.state;
        const {history} = this.props;
        return (
            <Container className="home">
                <Row>
                    <Col lg="3">
                        <Filters
                            showFilters={this.showFilters}
                            filters={filters}
                        />
                    </Col>
                    <Col lg="9">
                        <Tournaments filters={filters} history={history}/>
                    </Col>
                </Row>
                <Controls
                    show={show_filters}
                    onHide={this.hideFilters}
                    applyfilter={this.applyFilter}
                />
            </Container>
        );
    }
}

export default Home;
