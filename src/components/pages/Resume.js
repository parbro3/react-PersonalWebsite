import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import {PDFDownloadLink, Document, Page} from 'react-pdf';
import Lightbox from 'react-images';
import "../../stylesheets/HolyGrail.css";
import "../../stylesheets/Resume.css";

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

        const linkStyle = {
            color: 'white',
            'text-decoration': 'none'
        };

          const buttonStyle = {
          }

        return (



          <div class="project-frame">
            <div style={buttonStyle}>
                <Button color="secondary">
                    <a style={linkStyle} href="/resume.pdf" download="resumeParkerBronson.pdf">Download Resume</a>
                </Button>
            </div>
            <br/>
            <div class="Resume">
                <Document
                    file={require("./ParkerBronson_Resume.pdf")}
                    onLoadSuccess={this.onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} />
                </Document>
            </div>
          </div>
        );
      }
}
export default Resume;
