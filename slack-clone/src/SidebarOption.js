import React from "react";
import { useHistory } from "react-router-dom";

import db from './firebase'

import "./SidebarOption.css";

function SidebarOption({ Icon, title, id, addChannelOPtion }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push("title");
    }
  };

  const addChannel = ()=>{
    const channelName = prompt('Please enter the channel name');

    if(channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  }

  return (
    <div className="sidebarOption" onClick={addChannelOPtion ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="siderOption__hash">#</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
