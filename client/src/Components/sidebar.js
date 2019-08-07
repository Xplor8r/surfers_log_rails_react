import React from 'react';
import { Card, CardTitle, Col, ListGroup, ListGroupItem, Badge }  from 'reactstrap';

const SideBar = () => {
    return (
        <Col xs="3">
            <Card style={{backgroundColor: 'grey', margin: '.5rem', height: '100%'}}>
                <CardTitle>
                    <h1>Side Bar</h1>
                    <ListGroup>
                        <ListGroupItem 
                            style={{backgroundColor: 'grey'}}
                            className="justify-content-between"
                        >
                            USA <Badge pill>13</Badge>
                        </ListGroupItem>
                        <ListGroupItem 
                            style={{backgroundColor: 'grey'}}
                            className="justify-content-between"
                        >
                            Australia <Badge pill>2</Badge>
                        </ListGroupItem>
                        <ListGroupItem
                            style={{backgroundColor: 'grey'}}
                            className="justify-content-between"
                        >
                            Tahiti <Badge pill>1</Badge>
                        </ListGroupItem>
                    </ListGroup>
                </CardTitle>
            </Card>
        </Col>
    )
}

export default SideBar