import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

function FontAwesomeIcon(props) {
  return <Icon name={props.name} {...props} />;
}

export default FontAwesomeIcon;
