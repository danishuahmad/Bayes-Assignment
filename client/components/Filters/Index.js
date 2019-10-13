import React, { Component } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import { FiFilter } from 'react-icons/fi';

class Filters extends Component {

    getFilterPaneText = () => {
        let {filters} = this.props || {};
        let {series,start_date,end_date} = filters;
        let content = [];
        if( series || start_date || end_date ){
            if( series ){
                content = [...content,
                    <div className="row display-block">
                        <h5>Series: {series}</h5>
                    </div>
                ]
            }if( start_date ){
                content = [...content,
                    <div className="row display-block">
                        <h5>Start Date: {start_date}</h5>
                    </div>
                ]
            }if( end_date ){
                content = [...content,
                    <div className="row display-block">
                        <h5>End Date: {end_date}</h5>
                    </div>
                ]
            }
        }else{
            content = [...content,
                <div className="row display-block">
                    <span>No Filter Added</span>
                </div>
            ];
        }
        return content;
    };
    render() {
        let {showFilters} = this.props;
        return (
            <Row className="filters-container">
                <Col lg="2"/>
                <Col lg="8" className="filters-content">
                    {
                        this.getFilterPaneText().map( content =>
                            content
                        )
                    }
                </Col>
                <Col lg="2"/>
                <Button
                    onClick={showFilters}
                    variant="primary detail-btn"
                    className="detail-btn filter-btn"
                >
                    Filter <FiFilter/>
                </Button>
            </Row>
        );
    }
}

export default Filters;
