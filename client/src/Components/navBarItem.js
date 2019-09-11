import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import DynamicLink from './dynamicLink';

const NavBarItem = ({list, type, navToggle}) => {
	return (
		<UncontrolledDropdown nav inNavbar>
			{type === 'surfer' ?
				<DropdownToggle nav caret>Surfers</DropdownToggle>:
				type === 'country' ?
				<DropdownToggle nav caret>Countries</DropdownToggle>:
				<DropdownToggle nav caret>Surf Spots</DropdownToggle>
			}
				
			<DropdownMenu right>
				{list.map((item) => (
					<DynamicLink
						display={'name'}
						type={type}
						prop={item}
						key={item.id}
						navToggle={navToggle}
					/>
				))}
			</DropdownMenu>
		</UncontrolledDropdown>
	)
}

export default NavBarItem