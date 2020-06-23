import React from "react";
import PropTypes from "prop-types";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

ChannelButton.propTypes = {
  channelName: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default function ChannelButton({ channelName, selected }) {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}
