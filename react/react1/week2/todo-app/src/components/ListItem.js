import React from "react";

function ListItem(props) {
  return (
    <div>
      <li>
        {props.description}
        {props.time}
        {props.id}
      </li>
    </div>
  );
}

export default ListItem;
