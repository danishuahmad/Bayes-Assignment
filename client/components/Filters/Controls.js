import React, { Component } from 'react';
import {Modal,Col,Row,FormControl,Form} from 'react-bootstrap';
import tournaments from '../../../data/tournaments';
import moment from 'moment';

class Controls extends Component {
    constructor(props){
        super(props);
        this.state = {
            series: '',
            start_date: '',
            start_date_error:'',
            end_date: '',
            end_date_error:'',
        };
    }
    setSeries = (e) => {
        let series = e.target.value;
        this.setState({series});
    };
    changeStartDate = (e) => {
        if( e.target.value === '' ){
            this.setState({
                start_date: '',
                start_date_error: ''
            });
        }else{
            let date = moment(e.target.value,'DD/MM/YYYY');
            if( date.isValid() ){
                this.setState({
                    start_date: date.format('DD/MM/YYYY'),
                    start_date_error: ''
                });
            }else{
                this.setState({
                    start_date_error: 'Invalid start date provided.',
                });
            }
        }
    };
    changeEndDate = (e) => {
        if( e.target.value === '' ){
            this.setState({
                end_date: '',
                start_date_error: ''
            });
        }else{
            let date = moment(e.target.value,'DD/MM/YYYY');
            if( date.isValid() ){
                this.setState({
                    end_date: date.format('DD/MM/YYYY'),
                    end_date_error: ''
                });
            }else{
                this.setState({
                    end_date_error: 'Invalid end date provided.'
                });
            }
        }
    };
    getUniqueSeries = () => {
        let series = [];
        for( let i=0; i<tournaments.length; i++ ){
            if( series.findIndex( _series => _series.id === tournaments[i].series.id ) === -1 ){
                series = [...series, tournaments[i].series]
            }
        }
        return series;
    };
    onClose = () => {
        let {onHide,applyfilter} = this.props;
        let {series,start_date,end_date} = this.state;
        let filters = {};
        if( series ){
            filters = {...filters, series}
        }if( start_date ){
            filters = {...filters, start_date}
        }if( end_date ){
            filters = {...filters, end_date}
        }if( series || start_date || end_date ){
        }
        applyfilter(filters);
    };
    render() {
        const {series,start_date_error,end_date_error} = this.state;

        return (
            <Modal
                {...this.props}
                animation={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={this.onClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Filters
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg="1"/>
                        <Col lg="10" className="control-container">
                            <Col lg="4">
                                <span>Series: </span>
                            </Col>
                            <Col lg="8">
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Control onChange={this.setSeries} as="select" value={series}>
                                        <option value={''}>{" - All - "}</option>
                                        {
                                            this.getUniqueSeries().map( series =>
                                                <option value={series.id} key={series.id}>{series.name}</option>
                                            )
                                        }
                                    </Form.Control>
                                </Form.Group>

                            </Col>
                        </Col>
                        <Col lg="1"/>
                    </Row>

                    <Row>
                        <Col lg="1"/>
                        <Col lg="10" className="control-container">
                            <Col lg="4">
                                <span>Starting at: </span>
                            </Col>
                            <Col lg="8">
                                <FormControl
                                    placeholder="DD/MM/YYYY"
                                    onBlur={this.changeStartDate}
                                />
                                <span className="error-text">{start_date_error}</span>
                            </Col>
                        </Col>
                        <Col lg="1"/>
                    </Row>

                    <Row>
                        <Col lg="1"/>
                        <Col lg="10" className="control-container">
                            <Col lg="4">
                                <span>Ending at: </span>
                            </Col>
                            <Col lg="8">
                                <FormControl
                                    placeholder="DD/MM/YYYY"
                                    onBlur={this.changeEndDate}
                                />
                                <span className="error-text">{end_date_error}</span>
                            </Col>
                        </Col>
                        <Col lg="1"/>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Controls;