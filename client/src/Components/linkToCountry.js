import React from 'react';
import  { Link } from 'react-router-dom';
import { DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

const CountryLink = ({country, display}) => {
    return (
        <DropdownItem className="justify-content-center">
            <Link
                className="coral"
                to={{
                    pathname: `/country/${country.slug}`,
                    state: {country: country}
                }}
            >
                {display === 'country' ?
                    <Truncate lines={1} width={150}>  
                            {country.name}
                    </Truncate>:
                    <span>Log Entries</span>
                }
            </Link>
        </DropdownItem>
    )
}

export default CountryLink