import React from 'react';
import { Badge, Nav, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

const Country = ({country}) => {
    return (
        <Nav>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="coral" nav caret>
                    {country.name} {' '}
                    {country.log_entries.length > 0 &&
                        <Badge pill>{country.log_entries.length}</Badge>}             
                </DropdownToggle>
                <DropdownMenu left="true">
                    {country.log_entries.length > 0 ? 
                        <DropdownItem header>Surf Spots</DropdownItem>:
                        <DropdownItem header>No Log Entries</DropdownItem>
                    }              
                    <DropdownItem divider />
                    {country.log_entries.length > 0 ? 
                    country.surf_spots.map((spot)=> (
                        <DropdownItem key={spot.id}>
                            <Truncate lines={1} width={150}>
                                {spot.name}
                            </Truncate>
                        </DropdownItem>
                    )):
                        <DropdownItem>Create a log Entry</DropdownItem>
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    )
}

export default Country