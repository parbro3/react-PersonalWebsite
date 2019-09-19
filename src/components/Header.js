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
				title: "about",
				link: "/about"
			},
			{
				title: "projects",
				link: "/projects"
			},
	 		{
			title: "gallery",
			link: "/gallery"
			}
		],

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
	}

	return(
	    <PageHeader class="HolyGrail-header">
					<NavBarCustom title="prker bronson" social="true" share="false" menuItems={menuObject.menuItems} dropDownItems={menuObject.menuDropDowns}/>
			</PageHeader>
	);
}

}
export default Header;
