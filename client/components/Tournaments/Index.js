import React, { Component } from 'react';
import {Col,Card,Button} from 'react-bootstrap';
import tournaments from '../../../data/tournaments';
import { FiMapPin } from 'react-icons/fi';
import { IoIosArrowRoundDown } from 'react-icons/io';
import moment from 'moment';

class Tournaments extends Component {
    constructor(props){
        super(props);
        this.state = {
            tournaments:[]
        }
    }
    componentDidMount(){
        this.setState({tournaments})
    }
    componentDidUpdate(prevProps) {
        let {filters} = this.props;
        let _filters = prevProps.filters || {};
        if( (_filters.series !== filters.series) || (_filters.start_date !== filters.start_date) || (_filters.end_date !== filters.end_date) ){
            let _tournaments = tournaments;
            if( filters.series ){
                _tournaments = _tournaments.filter( tournament => tournament.series.id === Number(filters.series) );
            }
            if( filters.start_date ){
                let start_date = moment(filters.start_date,'DD/MM/YYYY');
                _tournaments = _tournaments.filter( tournament =>
                    start_date.diff( moment(tournament.date_start,'YYYY-MM-DD'),'days') === 0
                )
            }
            if( filters.end_date ){
                let end_date = moment(filters.end_date,'DD/MM/YYYY');
                _tournaments = _tournaments.filter( tournament =>
                    end_date.diff( moment(tournament.date_end,'YYYY-MM-DD'),'days') === 0
                )
            }

            this.setState({tournaments:_tournaments});
        }
    }
    render() {
        const {history} = this.props;
        return (
            this.state.tournaments.map( tournament =>
                <Col lg="6" key={tournament.id} className="tournaments-container">
                    <Card className="tournament-content">
                        <Card.Body>
                            <Col lg="5" className="float-left">
                                <h5>{moment(tournament.date_start,'YYYY-MM-DD').format("Do") }</h5>
                                <h6>{moment(tournament.date_start,'YYYY-MM-DD').format("MMMM,YY") }</h6>
                                <IoIosArrowRoundDown size={25}/>
                                <h5>{moment(tournament.date_end,'YYYY-MM-DD').format("Do") }</h5>
                                <h6>{moment(tournament.date_end,'YYYY-MM-DD').format("MMMM,YY") }</h6>
                            </Col>
                            <Col lg="7" className="float-left">
                                <Card.Title>{tournament.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <FiMapPin/> {`${tournament.city}, ${tournament.country}`}
                                </Card.Subtitle>
                            </Col>
                        </Card.Body>
                        <Button variant="primary" className="detail-btn right-bottom-abs" onClick={()=>history.push(`/tournament/${tournament.id}`)}>Details</Button>
                    </Card>
                </Col>
            )

        );
    }
}

export default Tournaments;
