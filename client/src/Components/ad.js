import React from 'react';
import Pic from "../images/Trunks_05_1024x1024.jpg";
import { Card,  CardHeader, Media} from 'reactstrap'

const Ad = () => {
    return (
        <a className="coral"
            href="https://catchsurf.com/collections/boardshorts"
            rel="noopener noreferrer"
            target="_blank"
        >
            <Card style={{position: 'sticky', top: '120px'}}>
                <CardHeader className="coral">
                    <strong>SALE!</strong><br/>Trunks and Boardshorts
                </CardHeader>
                <Media width="100%" src={Pic} alt="Trunks Ad" />
            </Card>
        </a>
    )
}

export default Ad