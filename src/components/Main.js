import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About.js';
import Gallery from './pages/Gallery.js';
import Resume from './pages/Resume.js';
import PersonalProjects from './pages/PersonalProjects.js';
import SchoolProjects from './pages/SchoolProjects.js';
import WorkProjects from './pages/WorkProjects.js';
import "../stylesheets/HolyGrail.css";

class Main extends Component {

render() {
	//changed home to return "About" component.
	return(
		<Router>
			<div class="HolyGrail-main">
				<Route path="/about" component={About}/>
				<Route path="/gallery" component={Gallery}/>
				<Route path="/resume" component={Resume}/>
				<Route path="/schoolProjects" component={SchoolProjects}/>
				<Route path="/workProjects" component={WorkProjects}/>
				<Route path="/personalProjects" component={PersonalProjects}/>
				<Route exact={true} path="/" component={About}/>
			</div>
		</Router>
	);
}

}
export default Main;
