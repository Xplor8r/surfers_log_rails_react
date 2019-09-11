import React from 'react';
import { Badge, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
import DynamicLink from './dynamicLink';

const SideBarItem = ({prop, type}) => {
    let logEntries, surfers;
    if (type === 'surf-spot') {
        logEntries = prop.log_entries;
        surfers = Array.from(new Set(logEntries.map(logEntry=>logEntry.user.id)))
            .map(id=>{
                return {
                    id: id,
                    slug: logEntries.find(logEntry=>logEntry.user.id===id).user.slug,
                    name: logEntries.find(logEntry=>logEntry.user.id===id).user.name
                }
            })
    }

    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="coral" nav caret>
                <Badge pill>{prop.log_entries.length}</Badge>
                {'  '} {prop.name}      
            </DropdownToggle>
            <DropdownMenu left="true">
                <DynamicLink
                    display={'log entries'}
                    prop={prop}
                    type={type}
                />
                <DropdownItem divider />

                {type === 'surf-spot' ?
                    <DropdownItem header>Surfers</DropdownItem>:
                    <DropdownItem header>Surf Spots</DropdownItem>
                }
                {type === 'surf-spot' ? surfers.map((surfer)=> (
                    <DynamicLink
                        display={'name'}
                        prop={surfer}
                        type={'surfer'}
                        key={surfer.id}
                    />
                )): prop.surf_spots.map((surfSpot)=> (
                    <DynamicLink
                        display={'name'}
                        prop={surfSpot}
                        type={'surf-spot'}
                        key={surfSpot.id}
                    />
                ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default SideBarItem