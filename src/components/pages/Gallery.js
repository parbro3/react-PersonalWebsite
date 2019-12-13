import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';



import "../../stylesheets/HolyGrail.css";

class GalleryCustom extends Component {

	render() {
		return(
			<div class="HolyGrail-main">
				<Jumbotron>
					<h2 className="display-2">Gallery</h2>
				</Jumbotron>
			</div>

		);
	}
}
export default GalleryCustom;
