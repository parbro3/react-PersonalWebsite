import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/HolyGrail.css";
import cloudPractitioner from '../img/cloudPractitioner.png';
import solutionsArchitect from '../img/solutionsArchitect.png';
import developerAssociate from '../img/developerAssociate.png';

import NavBarCustom from './tools/NavBarCustom.js';

const Helpers = require('./Helpers.js');

class Header extends Component {

render() {

	var menuObject = {
		"menuItems": [
			{
				title: "home",
				link: "/"
			},
			{
				title: "resume",
				link: "/resume"
			}
		],
		"menuDropDownObjects":[
			{
				title: "projects",
				dropDownItems:[
					{
						title: "school",
						link: "/schoolProjects"
					},
					{
						title: "work",
						link: "/workProjects"
					},
					{
						title: "personal",
						link: "/personalProjects"
					}
				]
			}
		]
	}

	var badges = [
		{
			imgSource: cloudPractitioner,
			link: "https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-10-26&ci=AWS01125057"
		},
		{
			imgSource: solutionsArchitect,
			link: "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-12-12&ci=AWS01125057"
		},
		{
			imgSource: developerAssociate,
			link: "https://www.youracclaim.com/badges/c4142162-f68b-4655-ad6c-b61e2c675865/public_url"
		}
	]

	return(
		<div>
			<div class="HolyGrail-header">
				<NavBarCustom title="parker bronson" badges={badges} social="true" share="false" menuItemsShowing="true" menuItems={menuObject.menuItems} dropDownObjects={menuObject.menuDropDownObjects}/>
			</div>
		</div>
	);
}

}
export default Header;


	/*


		"menuDropDowns": [
			{
				"header": "downloads",
				"menuItems": [
					{
						title: "test a",
						link: "/linka"
					},
					{
						title: "test b",
						link: "/linkb"
					},
					{
					title: "test c",
					link: "/linkc"
					}
				]
			},
			{
				"header": "links",
				"menuItems":[
					{
						title: "byu mechanical engineering",
						link: "https://me.byu.edu/"
					},
					{
						title: "test e",
						link: "/linke"
					},
					{
					title: "test f",
					link: "/linkf"
					}
				]
			}
		]

		*/