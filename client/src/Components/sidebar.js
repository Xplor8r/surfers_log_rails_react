import React from 'react';
import { Card, CardTitle, Col }  from 'reactstrap';

const SideBar = () => {
    return (
        <Col xs="3">
            <Card style={{backgroundColor: 'grey', margin: '.5rem', height: '100%'}}>
                <CardTitle>
                    <h1>Side Bar</h1>
                </CardTitle>
            </Card>
        </Col>
    )
}

export default SideBar