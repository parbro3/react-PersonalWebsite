import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import "../../stylesheets/HolyGrail.css";

class SocialIcons extends Component {

render() {
	return(
    <div>
      <SocialIcon class="socialmedia" url="https://twitter.com/parbro3" />
      <SocialIcon url="https://www.linkedin.com/in/parker-bronson-72699468" />
      <SocialIcon url="https://open.spotify.com/user/parbro3?si=vCE04DW8TJCrK16jaSwzaA" />
      <SocialIcon url="https://github.com/parbro3" />
    </div>
	);
}

}
export default SocialIcons;
