import React from 'react';
import  { Link } from 'react-router-dom';
import { DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

// navToggle used for nav links only when isMobile is true
// display used to dispay prop.name or Log Entries
// type used to pass to logEntriesContainer and for pathname
const DynamicLink = ({prop, display, type, navToggle}) => {
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
                onClick={navToggle}
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
