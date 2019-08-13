import React from 'react';
import { Badge, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

const SurfSpot = ({surfSpot}) => {
    let surfers = [];
    surfSpot.log_entries.forEach((logEntry)=>surfers.push(logEntry.user.name));

    return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="coral" nav caret>
                    {surfSpot.name} {' '}
                    <Badge pill>{surfSpot.log_entries.length}</Badge>          
                </DropdownToggle>
                <DropdownMenu left="true">
                    <DropdownItem>Log Entries</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Surfers</DropdownItem>            
                    {[...new Set(surfers)].map((surfer, i)=> (
                        <DropdownItem key={i}>
                            <Truncate lines={1} width={150}>
                                {surfer}
                            </Truncate>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
    )
}

export default SurfSpot