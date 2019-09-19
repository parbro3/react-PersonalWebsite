import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

import "../../stylesheets/HolyGrail.css";

class Home extends Component {

render() {
	return(

    <div class="HolyGrail-main">
      <Jumbotron>

          <h1 className="display-3">Hello, Everyone!</h1>
          <p className="lead">This is a portfolio website I built using ReactJS</p>
          <hr className="my-2" />
          <p>It mainly uses a library called ReactStrap but uses many custom components also. The code can be downloaded using the buttom below!</p>
          <p className="lead">
            <Button color="primary">Download</Button>
          </p>
      </Jumbotron>
		</div>

	);
}

}
export default Home;
