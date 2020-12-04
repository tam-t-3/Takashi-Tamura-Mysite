import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// FontAwesome Icon
const Icons: React.FC = () => {
  const iconStyle: React.CSSProperties = { padding: 0, fontSize: 50 };

  return (
      <FontAwesomeIcon style={iconStyle} icon={faInstagram} />
  );
}

export default Icons;