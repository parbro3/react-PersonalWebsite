import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement, StarIcon }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import "../../stylesheets/HolyGrail.css";
import "../../stylesheets/Tools.css";


class About extends Component {

render() {

	return(
		<div class="project-frame">
			<Jumbotron>
				<h1 className="display-3">Welcome!</h1>
				<p className="lead">This is a portfolio of projects to showcase my software expertise. It was built in React with libraries like react-strap, Router, and other custom components. AWS Amplify hosts the application. Here's the <a href="https://github.com/parbro3/react-PersonalWebsite" target="_blank">link to the repo</a>.</p>
			</Jumbotron>

			<VerticalTimeline className="testClass" layout="1-column">

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Jan 2019 - Present"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M0 0h24v24H0z" fill="none"/>
							<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
						</svg> } >
					<h3 className="vertical-timeline-element-title">Obeo Software Engineer</h3>
					<h4 className="vertical-timeline-element-subtitle">Sandy, Utah</h4>
					<p>
						I currently work as a software engineer for an on-demand real estate photography company called <a href="https://www.obeo.app" target="_blank">Obeo</a>.
                        I've worked on projects that involve api integrations with Youtube, Filestack, and SalesforceOne, projects that utilize the Salesforce CLI for data
						importing, and a big project developing regression tests for end to end testing to facilitate CI/CD.
					</p>
				</VerticalTimelineElement>


			</VerticalTimeline>

		</div>

	);
}

}
export default About;
