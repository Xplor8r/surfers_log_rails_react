import React from 'react';
import  { Link } from 'react-router-dom';
import { DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

const DynamicLink = ({prop, display, type}) => {
    return (
        <DropdownItem className="justify-content-center">
            <Link
                className="coral"
                to={{
                    pathname: `/${type}/${prop.slug}`,
                    state: {
                        prop: prop,
                        type: type
                    }
                }}
            >
                {display === 'name' ?
                    <Truncate lines={1} width={150}>  
                            {prop.name}
                    </Truncate>:
                    <span>Log Entries</span>
                }
            </Link>
        </DropdownItem>
    )
}

export default DynamicLink