import React from 'react';
import Pic from "../images/Trunks_05_1024x1024.jpg";
import { Card,  CardHeader, Media} from 'reactstrap'

const Ad = () => {
    return (
        <Card style={{position: 'sticky', top: '120px'}}>
            <CardHeader className="coral">
                <strong>SALE!</strong><br/>Trunks and Boardshorts
            </CardHeader>
            <Media width="100%" src={Pic} alt="Trunks Ad" />
        </Card>
    )
}

export default Ad