import React, { Component } from 'react';
import SocialIcons from './SocialIcons.js';
import ShareIcons from './ShareIcons.js';
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

	//drop downs with menu items
	buildDropDowns(dropDownItemsArray){
		var dropDownsBuilt = [];
		var menuItemsBuilt = [];
		dropDownItemsArray.forEach((element) => {
				dropDownsBuilt.push(
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							{element.header}
						</DropdownToggle>
						<DropdownMenu right>
							{this.buildMenuItems(element.menuItems)}
						</DropdownMenu>
					</UncontrolledDropdown>
				)
		});
		return dropDownsBuilt;
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

	render() {
		if(this.props.menuItemsShowing==="true"){
			return(
				<div>
					<Navbar color="light" light expand="md" >
						<NavbarBrand href="/">{this.props.title}</NavbarBrand>
						{this.evalSocial()}
						{this.evalShare()}
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar >
								{this.buildMenuItems(this.props.menuItems)}
								{this.buildDropDowns(this.props.dropDownItems)}
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
