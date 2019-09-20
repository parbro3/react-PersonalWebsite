import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import {Document, Page} from 'react-pdf';
import Lightbox from 'react-images';
import "../../stylesheets/HolyGrail.css";

class Resume extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
     
      render() {
        const { pageNumber, numPages } = this.state;
     
        return (
          <div>
            <Document
              file={require("./ParkerBronson_Resume.pdf")}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          </div>
        );
      }
}
export default Resume;
