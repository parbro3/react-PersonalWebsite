import React, { Component } from 'react';
import SocialIcons from './SocialIcons.js';
import ShareIcons from './ShareIcons.js';
import Badge from './Badge.js';
import {AutoAffix} from 'react-overlays'

import "../../stylesheets/NavBar.css";

import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu, DropdownItem } from 'reactstrap';

class NavBarCustom extends Component {

	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	buildMenuDropDowns(menuObjectsArray){
		var menuDropDownObjectsBuilt =[];
		console.log('building menu drop down');
		menuObjectsArray.forEach((element) => {
			console.log('here are the derop down items ' + JSON.stringify(element.dropDownItems));
			menuDropDownObjectsBuilt.push(
				<UncontrolledDropdown setActiveFromChild>
					<DropdownToggle tag="a" className="nav-link" caret>
						{element.title}
					</DropdownToggle>
					<DropdownMenu>
						{this.buildDropDownItems(element.dropDownItems)}
					</DropdownMenu>
				</UncontrolledDropdown>
			);
		});
		return menuDropDownObjectsBuilt;
	}

	//drop downs with menu items
	buildDropDownItems(dropDownItemsArray){
		var dropDownsBuilt = [];
		var menuItemsBuilt = [];
		dropDownItemsArray.forEach((element) => {
			console.log('yo here it is ' + JSON.stringify(element));
			dropDownsBuilt.push(
				<DropdownItem href={element.link}>{element.title}</DropdownItem>
			)
		});
		return dropDownsBuilt;
	}

	buildMenuItems(menuItemsArray) {
		var menuItemsBuilt = [];
		menuItemsArray.forEach((element) => {
				menuItemsBuilt.push(
					<NavItem>
						<NavLink href={element.link}>{element.title}</NavLink>
					</NavItem>
				)
		});
		return menuItemsBuilt;
	}

	evalSocial(){
		if(this.props.social==="true") {
			return <SocialIcons />
		} else {
			return
		}
	}

	evalShare(){
		if(this.props.share==="true") {
			return <ShareIcons />
		} else {
			return
		}
	}

	evalBadges(badges){
		var badgeArray = [];
		console.log('here are the bages ' + JSON.stringify(badges));
		badges.forEach((element) => {
			console.log('oh here\'s a badge');
			badgeArray.push(
				<Badge imgSource={element.imgSource} link={element.link} />
			);
		});
		return badgeArray;
	}

	render() {
		if(this.props.menuItemsShowing==="true"){
			return(
				<div>
					<Navbar color="light" light expand="md" >
						<NavbarBrand href="/">{this.props.title}</NavbarBrand>

						{this.evalSocial()}
						{this.evalShare()}

						<div class="badgeContainer">
							{this.evalBadges(this.props.badges)}
						</div>

						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar >
								{this.buildMenuItems(this.props.menuItems)}
								{this.buildMenuDropDowns(this.props.dropDownObjects)}
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			);
		} else {
			return(
				<div>
					<Navbar color="light" light expand="md" >
						<NavbarBrand href="/">{this.props.title}</NavbarBrand>
						{this.evalSocial()}
						{this.evalShare()}
					</Navbar>
				</div>
			);
		}
	}
}
export default NavBarCustom;
