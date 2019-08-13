import React from 'react';
import { Badge, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

const Country = ({country}) => {
    return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="coral" nav caret>
                    {country.name} {' '}
                    <Badge pill>{country.log_entries.length}</Badge>          
                </DropdownToggle>
                <DropdownMenu left="true">
                    <DropdownItem>Log Entries</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Surf Spots</DropdownItem>       
                    {country.surf_spots.map((spot)=> (
                        <DropdownItem key={spot.id}>
                            <Truncate lines={1} width={150}>
                                {spot.name}
                            </Truncate>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
    )
}

export default Country