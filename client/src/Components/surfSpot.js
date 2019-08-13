import React from 'react';
import { Badge, Nav, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

const SurfSpot = ({surfSpot}) => {
    return (
        <Nav>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="coral" nav caret>
                    {surfSpot.name} {' '}
                    {surfSpot.log_entries.length > 0 &&
                        <Badge pill>{surfSpot.log_entries.length}</Badge>}             
                </DropdownToggle>
                <DropdownMenu left="true">
                    {surfSpot.log_entries.length > 0 ? 
                        <DropdownItem header>Surfers</DropdownItem>:
                        <DropdownItem header>No Log Entries</DropdownItem>
                    }              
                    <DropdownItem divider />
                    {surfSpot.log_entries.length > 0 ? 
                    surfSpot.log_entries.map((logEntry)=> (
                        <DropdownItem key={logEntry.id}>
                            <Truncate lines={1} width={150}>
                                {logEntry.user.name}
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

export default SurfSpot