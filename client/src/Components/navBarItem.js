import React, { useState } from "react";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import DynamicLink from "./dynamicLink";

// navToggle passed to DynamicLink for when isMobile
// type passed to DynamicLink
const NavBarItem = ({ list, type, navToggle }) => {
  // use hooks for dropdown menu toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown direction="left" isOpen={isOpen} toggle={toggle}>
      <DropdownToggle nav caret style={{ color: "white" }}>
        {type === "surfer"
          ? "Surfers"
          : type === "country"
          ? "Countries"
          : "Surf Spots"}
      </DropdownToggle>
      <DropdownMenu
        modifiers={{
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: data => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflow: "auto",
                  maxHeight: "30vh"
                }
              };
            }
          }
        }}
      >
        {list.map(item => (
          <DynamicLink
            display={"name"}
            type={type}
            prop={item}
            key={item.id}
            navToggle={navToggle}
          />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavBarItem;
