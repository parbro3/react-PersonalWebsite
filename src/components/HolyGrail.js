import React, { Component } from 'react';
import {Affix, AutoAffix} from 'react-overlays'

import "../stylesheets/HolyGrail.css";

import Header from './Header.js';
import Main from './Main.js';
import AsideLeft from './AsideLeft.js';
import AsideRight from './AsideRight.js';
import Footer from './Footer.js';


class HolyGrail extends Component {



//usually include <AsideLeft /> and <AsideRight />

render() {
	return(
    <body class="HolyGrail">


      <Header />


      <div class="HolyGrail-body">
        <Main />
      </div>



	    <Footer />


    </body>
	);
}

}
export default HolyGrail;
