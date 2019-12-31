import React, {Image, Component } from 'react';
import "../../stylesheets/NavBar.css";

class Badge extends Component {

render() {
	return(
    <div>
      <div>
        <a target="_blank" href={this.props.link}>
          <img class="imgBadge" src={this.props.imgSource} />
        </a>
      </div>
    </div>
	);
}

}
export default Badge;
