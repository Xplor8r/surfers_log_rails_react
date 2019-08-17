import React from 'react';
import { Badge, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import SurferLink from './linkToSurfer'

const SurfSpot = ({surfSpot}) => {
    let logEntries = surfSpot.log_entries;
    let surfers = Array.from(new Set(logEntries.map(logEntry=>logEntry.user.id)))
        .map(id=>{
            return {
                id: id,
                slug: logEntries.find(logEntry=>logEntry.user.id===id).user.slug,
                name: logEntries.find(logEntry=>logEntry.user.id===id).user.name
            }
        })

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
                    {surfers.map((surfer)=> (
                        <SurferLink surfer={surfer} key={surfer.id}/>

                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
    )
}

export default SurfSpot