import React from "react";
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import DynamicLink from "./dynamicLink";

const SideBarItem = ({ prop, type }) => {
  let logEntries, surfers;
  if (type === "surf-spot") {
    logEntries = prop.log_entries;
    surfers = Array.from(
      new Set(logEntries.map(logEntry => logEntry.user.id))
    ).map(id => {
      const user = logEntries.find(logEntry => logEntry.user.id === id).user;
      return { id: id, slug: user.slug, name: user.name };
    });
  }

  const list = type === "surf-spot" ? surfers : prop.surf_spots;
  const linkType = type === "surf-spot" ? "surfer" : "surf-spot";
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle className="coral" nav caret>
        <Badge pill style={{marginRight: "10px"}}>{prop.log_entries.length}</Badge>
        {prop.name}
      </DropdownToggle>
      <DropdownMenu left="true">
        <DynamicLink display={"log entries"} prop={prop} type={type} />
        <DropdownItem
          header
          className="coral"
          style={{ backgroundColor: "#eeeeee" }}
        >
          {type === "surf-spot" ? "SURFERS" : "SURF SPOTS"}
        </DropdownItem>
        {list.map(item => {
        return (
          <DynamicLink display={"name"} prop={item} type={linkType} key={item.id} />
        )})}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default SideBarItem;
