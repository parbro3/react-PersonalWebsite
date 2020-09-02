import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import "../stylesheets/HolyGrail.css";

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
