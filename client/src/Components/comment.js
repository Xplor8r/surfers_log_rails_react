import React, { useState} from 'react';
import Truncate from 'react-truncate';
import { CardText } from 'reactstrap';
import {Link} from 'react-router-dom';

const Comment = ({comment}) => {
    // use hooks for expanding truncated text
    const [lines] = useState(1);
    const [expanded, setExpanded] = useState(false);
    const toggleLines = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    }
    return (
        <CardText>
            <strong>{comment.user.name}</strong> <span>posted:</span><br/>
            <Truncate 
                lines={!expanded && lines}
                ellipsis={(
                <span>... <Link 
                    className="coral"
                    to={`/log-entry/${comment.log_entry_id}`}
                    onClick={(e) => toggleLines(e)}
                    >
                        See More
                    </Link>
                </span>
                )}
            >
                {comment.content}
            </Truncate>
        </CardText>
    )
}

export default Comment