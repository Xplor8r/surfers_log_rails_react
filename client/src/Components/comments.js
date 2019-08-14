import React, { Component } from 'react';
import Truncate from 'react-truncate';
import { CardText, CardFooter } from 'reactstrap';


class Comments extends Component {

    render() {
        let comments = this.props.comments;
        return (
            <CardFooter>
                <a href="#" >Comments: {comments.length - 1}</a>
                {comments.slice(1).map((comment) => (
                    <CardText key={comment.id}>
                        <strong>{comment.user.name}</strong> <span>posted:</span><br/>
                        <Truncate lines={1}>{comment.content}</Truncate>
                    </CardText>
                ))}
            </CardFooter>        
            
        )
    }
}

export default Comments