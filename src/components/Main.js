import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About.js';
import Gallery from './pages/Gallery.js';
import Projects from './pages/Projects.js';
import Home from './pages/Home.js';

import "../stylesheets/HolyGrail.css";

class Main extends Component {

render() {
	return(
		<Router>
			<div class="HolyGrail-main">
				<Route path="/about" component={About}/>
				<Route path="/projects" component={Projects}/>
				<Route path="/gallery" component={Gallery}/>
				<Route exact={true} path="/" component={Home}/>
			</div>
		</Router>
	);
}

}
export default Main;
