import React from "react";

import { Button } from "./styles";
import PropTypes from "prop-types";

import Logo from "../../assets/Logo.png";

ServerButton.propTypes = {
  selected: PropTypes.bool,
  isHome: PropTypes.bool,
  hasNotification: PropTypes.bool,
  mentions: PropTypes.number,
};

function ServerButton({ selected, isHome, hasNotification, mentions }) {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Official Logo" />}
    </Button>
  );
}

export default ServerButton;
