import React, { Component } from 'react';
import CarouselCustom from '../tools/CarouselCustom.js';
import { Jumbotron } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import "../../stylesheets/HolyGrail.css";
import "../../stylesheets/Tabs.css";

class SchoolProjects extends Component {

	constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
	this.state = {
		activeTab: '4'
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

	return(

    <div class="project-frame">

			<Nav tabs>
				<NavItem>
					<NavLink className={classnames({ active: this.state.activeTab === '4' })}
						onClick={() => { this.toggle('4'); }} >
						Family History App
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: this.state.activeTab === '5' })}
						onClick={() => { this.toggle('5'); }} >
						Board Game App
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={this.state.activeTab}>

				<TabPane tabId="4">
					<div class="flex-family-container">
						<Jumbotron>
							<h2 className="display-4">Family History Map</h2>

							<h3 className="lead">This is a full stack Android App. The user's ancestry and events are displayed on a map. 
							The backend was built in Java, and DB in SQLite. Details show how your family is connected (by marriage and ancestry) and where they went in their life.</h3>
							<CarouselCustom items={familyMapItems} />
						</Jumbotron>
					</div>
				</TabPane>
				<TabPane tabId="5">
					<Jumbotron>

						<h2 className="display-4">Ticket to Ride Board Game</h2>
						<p className="lead">
							For my software design and patterns class, we were tasked with building the Ticket to Ride board game
							with whatever technologies we wanted using software patterns like Facade, Singleton, Command, Plugin, Proxy, 
							State, and Factory.
						</p>
						<br/>
						<p className="lead">
							I worked primarily on the back-end server built in Java using Android Studio. The repository can be found at the link below. 
						</p>
						<a href="https://github.com/kjohnsen/T2R_divergent_walruses" target="_blank">Github Repo</a>
					</Jumbotron>
				</TabPane>
			</TabContent>

		</div>
	);
}

}
export default SchoolProjects;
