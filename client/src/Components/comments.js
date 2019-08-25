import React, { useState } from 'react';
import { CardFooter } from 'reactstrap';
import Comment from './comment'
import  { Link } from 'react-router-dom';

const Comments = ({posts}) => {
    const [comments] = useState(posts.slice(1));
    const [commentsToRender, setCommentsToRender] = useState(0);
    const handleClick = (e) => { 
        e.preventDefault();
        setCommentsToRender(comments.length + 1);
    }

    const num = commentsToRender;
    const logEntryId = posts[0].log_entry_id;

    return (
        <CardFooter>
            {comments.length === 0 ? <p>No Comments</p>: num === 0 ?
                <Link
                    to={`/log-entry/${logEntryId}`}
                    onClick={(e) => handleClick(e)}
                >
                    Comments: {comments.length}
                </Link>:
                <p>Comments: </p>
            }
            {comments.slice(0, num).map((comment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </CardFooter>      
    )
}

export default Comments