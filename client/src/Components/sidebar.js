import React from 'react';
import { Card, CardText, Col, ListGroup, ListGroupItem }  from 'reactstrap';
import Country from './country';

const SideBar = ({countries}) => {
    let topList = countries.filter(a=>a.log_entries.length > 0);
    let alphaList = countries.sort((a,b)=> a.name.localeCompare(b.name)).filter(a=>a.log_entries.length === 0);

    return (
        <Col xs="3" style={{ padding: '0px'}}>
            <Card style={{ margin: '2rem .5rem 1rem .5rem'}}>
                <CardText>
                    <h2>Countries</h2>
                    <ListGroup>
                        {topList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >
                                <Country country={country}/>
                            </ListGroupItem>
                        ))}
                        {alphaList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >     
                                <Country country={country}/>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardText>
            </Card>
        </Col>
    )
}

export default SideBar