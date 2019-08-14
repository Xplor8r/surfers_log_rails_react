import React from 'react';
import Truncate from 'react-truncate';
import { CardText } from 'reactstrap';

const Comment = ({comment}) => {
    return (
        <CardText>
            <strong>{comment.user.name}</strong> <span>posted:</span><br/>
            <Truncate lines={1}>{comment.content}</Truncate>
        </CardText>
    )
}

export default Comment