import React, { Component } from 'react';
import "../stylesheets/HolyGrail.css";
import NavBarCustom from './tools/NavBarCustom.js';
const Helpers = require('./Helpers.js');

class Footer extends Component {

render() {

	return(
    <footer class="HolyGrail-footer">
			<NavBarCustom title="share" social="false" share="true" menuItems={[]} dropDownItems={[]}/>
    </footer>
	);
}

}
export default Footer;
