import React, { Component } from 'react';
import CarouselCustom from '../tools/CarouselCustom.js';
import { Jumbotron } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import "../../stylesheets/HolyGrail.css";
import "../../stylesheets/Tabs.css";

class WorkProjects extends Component {

	constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
	this.state = {
		activeTab: '1'
	};
}

toggle(tab) {
	if (this.state.activeTab !== tab) {
		this.setState({
			activeTab: tab
		});
	}
}


render() {

	const fedexItems = [
		{
			src: '../../img/Director-Choice-Winner3.JPG',
			altText: '',
			caption: '',
			customCaption: 'My team after winning The Director\'s Choice Award.'
		},
		{
			src: '../../img/FedexPresentation.JPG',
			altText: '',
			caption: '',
			customCaption: 'Presenting our product to the department.'
		},
		{
			src: '../../img/FedexJet.JPG',
			customCaption: 'Heading off to tour the FedEx Data Center.'
		}
	];

	return(
		<div class="project-frame">

				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => { this.toggle('1'); }} >
							FedEx Internship
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => { this.toggle('2'); }} >
							Caldera Internship
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => { this.toggle('3'); }} >
							Spirit AeroSystems
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="2">
						<Jumbotron>

							<h2 className="display-4">Caldera Intern Project</h2>
							<p className="lead">
							<a target="_blank" href="http://www.calderaengineering.com/" target="_blank"> Caldera Engineering </a>
							is a company that provides valves for the mineral mining industry. Before I arrived, they did their mathematical models with properties of water which was acceptable in the mineral mining industry.
							However, they wanted to explore the oil industry, but hydrocarbon properties are far different than water. As an intern for Caldera, I was tasked with modeling a valve sizing process while implementing properties of many substances and mixtures.
							I built a solution in python using some of the property and process libaries from an open source software called DWSIM. Some of the outputted results can be seen below.</p>

						</Jumbotron>
					</TabPane>

					<TabPane tabId="3">
						<Jumbotron>

							<h2 className="display-4">Spirit AeroSystems</h2>
							<p className="lead">
								On a team of only a few developers, I helped build an application that allowed an engineer to 
								write one script to produce a 3D model in multiple different industry-leading softwares. Using an XML-based
								scripting language, our application would parse the user-written script, and then use the Catia API and NX API
								to build models in each respective program.
							</p>

							<br/>
							<a href="http://www.cadconferences.com/CAD18_412-416.html#.XXFh2pNKjOQ" target="_blank">Published Research Article</a>
						</Jumbotron>
					</TabPane>

					<TabPane tabId="1">
						<Jumbotron>

							<h2 className="display-4">Fedex Intern Project</h2>
							<p className="lead">
								I interned at the FedEx World Tech Center located in Collierville (Memphis), Tennessee during the Summer of 2018. 
								And, what an experience it was! I worked on a team of six people all from different backgrounds, competing against ten other teams 
								all seeking to solve a problem for their department. In the network communications department, we were tasked with providing a real-time 
								view of the health of the FedEx Network.
							</p>
							<br/>
							<p2 className="lead">
								We chose to use a product called "Splunk". Splunk allowed us to route all of the data from all the different devices on the network 
								to one location. Then, we drew business intelligence from the humungous data sets. We built an application that gave us real-time status 
								of the different interfaces on each of the core routers in the backbone of the network, and won first place in the Director's Choice Awards!
							</p2>
							<CarouselCustom items={fedexItems} />
						</Jumbotron>
					</TabPane>
				</TabContent>
			</div>
		);
	}

}
export default WorkProjects;
