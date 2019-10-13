import React, { Component } from 'react';
import {Col,Card,Row,Container} from 'react-bootstrap';
import tournaments from '../../../data/tournaments';
import { FiMapPin } from 'react-icons/fi';
import { IoIosArrowRoundDown } from 'react-icons/io';
import moment from 'moment';

class TournamentDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            tournament:{},
            not_found: false
        }
    }
    componentWillMount(){
        let {tournament_id} = this.props.match.params;
        let tournament_index = tournaments.findIndex( tournament => Number(tournament.id) === Number(tournament_id) );
        if( tournament_index > -1 ){
            this.setState({tournament:tournaments[tournament_index]})
        }else{
            this.setState({not_found:true})
        }
    }
    render() {
        const {not_found,tournament} = this.state;
        return (
            <Container>
                {
                    not_found ?
                        <h3 className="text-center">No Data Found</h3>
                    :
                        <Row>
                            <Col lg="2"/>
                            <Col lg="8" className="float-left tournament-detail-content">
                                <Card.Title>{tournament.name}</Card.Title>
                                <h6 className="tournament-date">
                                    {moment(tournament.date_start,'YYYY-MM-DD').format("MMMM Do, YYYY") } to {moment(tournament.date_end,'YYYY-MM-DD').format("MMMM Do, YYYY") }
                                </h6>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <FiMapPin/> {`${tournament.city}, ${tournament.country}`}
                                </Card.Subtitle>
                                <hr/>
                                <h5 className="text-center">Series</h5>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <h4>{tournament.series.name}</h4>
                                    <h6>
                                        {
                                            console.log(tournament.series)
                                        }
                                        {moment(tournament.series.date_start,'YYYY-MM-DD').format("MMMM Do, YYYY") } to {moment(tournament.series.date_end,'YYYY-MM-DD').format("MMMM Do, YYYY") }
                                    </h6>
                                </Card.Subtitle>
                            </Col>
                            <Col lg="2"/>
                        </Row>
                }
            </Container>
        );
    }
}

export default TournamentDetail;
