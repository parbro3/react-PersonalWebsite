import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import "../../stylesheets/HolyGrail.css";

class SocialIcons extends Component {

render() {
	return(
    <div>
      <SocialIcon url="https://www.linkedin.com/in/parker-bronson-72699468" />
      <SocialIcon url="https://github.com/parbro3" />
    </div>
	);
}

}
export default SocialIcons;
