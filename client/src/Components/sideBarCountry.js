import React from 'react';
import { Badge, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import DynamicLink from './dynamicLink';

const Country = ({country}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="coral" nav caret>
                {country.name} {' '}
                <Badge pill>{country.log_entries.length}</Badge>          
            </DropdownToggle>
            
            <DropdownMenu left="true">
                <DynamicLink display={'log entries'} prop={country} type={'country'}/>
                <DropdownItem divider />

                <DropdownItem header>Surf Spots</DropdownItem>       
                {country.surf_spots.map((surfSpot)=> (
                    <DynamicLink display={'name'} prop={surfSpot} type={'surf-spot'} key={surfSpot.id}/>
                ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default Country