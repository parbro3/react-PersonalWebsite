import React, { Component } from 'react';
import CarouselCustom from '../tools/CarouselCustom.js';
import { Route } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import classnames from 'classnames';

import "../../stylesheets/HolyGrail.css";
import "../../stylesheets/Tabs.css";

class Projects extends Component {

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

	const familyMapItems = [
  {
    src: '../../img/familymapHome.png',
    altText: '',
    caption: '',
    customCaption: 'This is the home screen. Each marker represents an event of someone in your family tree. It could be a birth, marriage, death, or any custom event.'
  },
  {
    src: '../../img/familymapDetails.png',
    altText: '',
    caption: '',
    customCaption: 'This screen shows the details of the family member. Displayed are the events and family members belonging to the selected person.'
  },
  {
    src: '../../img/familymapFilter.png',
    altText: '',
    caption: '',
    customCaption: 'The Family Map app allows for filtering events and people for user customization. For instance, if the user wanted to see only female birth events on his/her mother\'s side.'
  },
	{
		src: '../../img/familymapSearch.png',
		altText: '',
		caption: '',
    customCaption: 'And of course, if the user couldn\'t find what they were looking for, they could search for the desired event or person in their family tree.'
	},
	{
		src: '../../img/familymapSettings.png',
		altText: '',
		caption: '',
    customCaption: 'Custom settings allow for map type selection, map lines, and resyncing changed data from the data source.'
	}
];

const fedexItems = [
	{
		src: '../../img/Director-Choice-Winner3.JPG',
		altText: '',
		caption: '',
		customCaption: 'My team after winning The Director\'s Choice Award'
	},
	{
		src: '../../img/FedexPresentation.JPG',
		altText: '',
		caption: '',
		customCaption: 'Presenting our product to the department. A little nerve-racking!'
	},
	{
		src: '../../img/FedexJet.JPG',
		customCaption: 'Getting ready to board the FedEx private jet!'
	}
];

	return(

    <div class="project-frame">

			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: this.state.activeTab === '1' })}
						onClick={() => { this.toggle('1'); }}
					>
						Family Map
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
						FedEx Networking Internship
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={this.state.activeTab}>

				<TabPane tabId="1">
					<div class="flex-family-container">

							<Jumbotron>
								<h2 className="display-4">Family History Map</h2>

								<h3 className="lead">This is the Family Map. A full stack Android App. The backend was built in Java, and DB in SQLite. This utility shows how your family is connected (by marriage and ancestry) and where they went in their life.</h3>
								<CarouselCustom items={familyMapItems} />
							</Jumbotron>

					</div>
				</TabPane>

				<TabPane tabId="2">
					<Jumbotron>

						<h2 className="display-4">Caldera Intern Project</h2>
						<p className="lead">
						<a target="_blank" href="http://www.calderaengineering.com/"> Caldera Engineering </a>
						is a company that provides valves for the mineral mining industry. Before I arrived, they did their mathematical models with properties of water which was acceptable in the mineral mining industry.
						However, they wanted to explore the oil industry, but hydrocarbon properties are far different than water. As an intern for Caldera, I was tasked with modeling a valve sizing process while implementing properties of many substances and mixtures.
						I built a solution in python using some of the property and process libaries from an open source software called DWSIM. Some of the outputted results can be seen below.</p>

					</Jumbotron>



				</TabPane>

				<TabPane tabId="3">
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
export default Projects;
