import React from 'react';
import { Badge, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import SurfSpotLink from './linkToSurfSpot'

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
                    {country.surf_spots.map((surfSpot)=> (
                        <SurfSpotLink surfSpot={surfSpot} key={surfSpot.id}/>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
    )
}

export default Country