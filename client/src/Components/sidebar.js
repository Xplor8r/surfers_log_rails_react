import React from 'react';
import { Nav, Card, CardBody, CardImg, CardHeader, CardText, Col, ListGroup, ListGroupItem }  from 'reactstrap';
import Country from './country';
import SurfSpot from './surfSpot';
import header from '../images/surfers-log-header.gif'

const SideBar = ({countries, surfSpots}) => {
    let countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
    let surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

    return (
        <Col xs="3" style={{ padding: '0px'}}>
            <Card style={{ margin: '2rem .5rem 1rem .5rem'}}>
                <CardBody style={{padding: '0px'}}>
                    <CardHeader style={{paddingTop: '.5rem'}}>
                        <h3><strong>Surf Spots</strong></h3>
                    </CardHeader>
                    <ListGroup>
                        {surfSpotsWithLogEntries.map((surfSpot) => (
                            <ListGroupItem 
                                key={surfSpot.id}
                                className="justify-content-center"
                            >
                                <Nav><SurfSpot surfSpot={surfSpot}/></Nav>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
            <Card style={{ margin: '2rem .5rem 1rem .5rem'}}>
                <CardBody style={{padding: '0px'}}>
                    <CardHeader style={{paddingTop: '.5rem'}}>
                        <h3><strong>Countries</strong></h3>
                    </CardHeader>
                    <ListGroup>
                        {countriesWithLogEntries.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >
                                <Nav><Country country={country}/></Nav>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
            <Card style={{position: 'sticky', top: '120px', margin: '2rem .5rem 1rem .5rem'}}>
                <CardImg
                    top
                    width='50%'
                    src={header}
                    alt={"Surfer Log"}
                />
                <CardText>Ad Goes Here</CardText>
            </Card>
        </Col>
    )
}

export default SideBar