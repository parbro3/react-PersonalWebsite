import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';

import {Affix, AutoAffix} from 'react-overlays'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/HolyGrail.css";

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

	return(
		<div>
			<PageHeader class="HolyGrail-header">
				<NavBarCustom title="parker bronson" social="true" share="false" menuItemsShowing="true" menuItems={menuObject.menuItems} dropDownObjects={menuObject.menuDropDownObjects}/>
			</PageHeader>
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