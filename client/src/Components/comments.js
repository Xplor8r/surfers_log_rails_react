import React, { Component } from 'react';
// import Truncate from 'react-truncate';
import { CardFooter } from 'reactstrap';
import Comment from './comment'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            comments: this.props.comments.slice(1),
            commentsToRender: 0
        }
    }
    handleClick = (e) => { 
        e.preventDefault();
        this.setState({
            commentsToRender: this.state.comments.length + 1
        })
    }
    render() {
        let comments = this.state.comments;
        let num = this.state.commentsToRender;
        return (
            <CardFooter>
                {comments.length === 0 ? <p>No Comments</p>:
                    num === 0 ? <a href="#" onClick={(e) => this.handleClick(e)}>Comments: {comments.length}</a>:
                    <p>Comments: </p>
                }
                {comments.slice(0, num).map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </CardFooter>        
            
        )
    }
}

export default Comments