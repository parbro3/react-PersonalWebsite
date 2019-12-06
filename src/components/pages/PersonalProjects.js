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

class PersonalProjects extends Component {

	constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
	this.state = {
		activeTab: '6'
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

	return(

    <div class="project-frame">

			<Nav tabs>
				<NavItem>
					<NavLink className={classnames({ active: this.state.activeTab === '6' })}
						onClick={() => { this.toggle('6'); }} >
						Password List
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: this.state.activeTab === '7' })}
						onClick={() => { this.toggle('7'); }} >
						Confidential
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={this.state.activeTab}>

				<TabPane tabId="6">
					<div class="flex-family-container">
						<Jumbotron>
							<h2 className="display-4">Password List Generator</h2>

							<h3 className="lead">
								I have a strong interest in security. My offensive security class and password cracking activities made me want to build 
								tool that generates a password list based on what you know about a person and their social media pages. My tool will go out 
								and scrape public social media pages like LinkedIn and Facebook to retrieve personal information to be used in word generation. 
								I use technologies like cewl, a webscraping linux CLI tool, and just good ole java to build permutations of the words.
							</h3>
							<br/>
								This solution is under construction but the repo can be found <a href="https://github.com/parbro3/passwordListGenerator">here</a>
								.
						</Jumbotron>

					</div>
				</TabPane>

				<TabPane tabId="7">
					<Jumbotron>

						<h2 className="display-4">Confidential Project</h2>
						<p className="lead">
							This project is under construction. I don't want to release the idea yet, but I'm building it in AWS using technologies
							 like API Gateway, Lambda, DynamoDB, Cognito, and Amplify!
						</p>

					</Jumbotron>
				</TabPane>
			</TabContent>

		</div>
	);
}

}
export default PersonalProjects;
