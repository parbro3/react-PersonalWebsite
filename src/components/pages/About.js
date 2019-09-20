import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement, StarIcon }  from 'react-vertical-timeline-component';
import ReactSVG from 'react-svg'

import 'react-vertical-timeline-component/style.min.css';
//import "../../stylesheets/HolyGrail.css";
import "../../stylesheets/Tools.css";


class About extends Component {

render() {

	return(

		<VerticalTimeline>


			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="Future"
				iconStyle={{ background: '#FEC540', color: '#fff' }}
				icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
				</svg>}
			>
				<h3 className="vertical-timeline-element-title">Company: ? ? ?</h3>
				<h4 className="vertical-timeline-element-subtitle">Location: ? ? ?</h4>
				<p>
					My options are open! I really want to get a software engineering job at a big company like Amazon or Google. But I dream!
				</p>
			</VerticalTimelineElement>


			<VerticalTimelineElement
		    className="vertical-timeline-element--education"
		    date="Summer 2018"
		    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
				</svg> }
		  >
		    <h3 className="vertical-timeline-element-title">FedEx IT Intern</h3>
		    <h4 className="vertical-timeline-element-subtitle">Memphis, Tennessee</h4>
		    <p>
		      Working in the Network Communications Dept, I led the technical team using Scrum/Agile methodologies in the development of a Network Health dashboard in Splunk (Big Data Analytics).
		    </p>
		  </VerticalTimelineElement>

			<VerticalTimelineElement
		    className="vertical-timeline-element--education"
		    date="Febraruary 2017 - Now"
		    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
				</svg> }
		  >
		    <h3 className="vertical-timeline-element-title">Spirit Aerosystems — Research Assistant</h3>
		    <h4 className="vertical-timeline-element-subtitle">Provo, Utah</h4>
		    <p>
		      As a computer-aided design specialist, I do research for the Mechanical Engineering Dept at BYU seeking solutions to automating scripts for Spirit Aerosystems.
		    </p>
		  </VerticalTimelineElement>
			<VerticalTimelineElement
		    className="vertical-timeline-element--education"
		    date="Summer 2017"
		    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
				</svg> }
		  >
		    <h3 className="vertical-timeline-element-title">Caldera Engineering Intern</h3>
		    <h4 className="vertical-timeline-element-subtitle">Provo, Utah</h4>
		    <p>
		      On the technology development team, I built a python solution in python by implementing properties of substances and mixtures found in an open-source library called DWSIM.
		    </p>
		  </VerticalTimelineElement>

			<VerticalTimelineElement
		    className="vertical-timeline-element--education"
		    date="August 2015 - Febraruary 2017"
		    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
				</svg>
}
		  >
		    <h3 className="vertical-timeline-element-title">Accounting Systems Analyst</h3>
		    <h4 className="vertical-timeline-element-subtitle">Provo, Utah</h4>
		    <p>
		      Working for BYU Financial Services, I optimized processes through various scripts and queries that are still used today.
		    </p>
		  </VerticalTimelineElement>

			<VerticalTimelineElement
		    className="vertical-timeline-element--work"
		    date="2015 - Now"
		    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
				</svg> }
		  >
		    <h3 className="vertical-timeline-element-title">Brigham Young University</h3>
		    <h4 className="vertical-timeline-element-subtitle">Provo, Utah</h4>
		    <p>
		      I returned to school to finish up my studies. I am currently in my final year at BYU.
		    </p>
		  </VerticalTimelineElement>

		  <VerticalTimelineElement
		    className="vertical-timeline-element--work"
		    date="2013 - 2015"
		    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
				    <defs>
				        <path id="a" d="M0 0h24v24H0V0z"/>
				    </defs>
				    <path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" clip-path="url(#b)"/>
				    <path clip-path="url(#b)" fill="none" d="M0 0h24v24H0V0z"/>
				</svg>}
		  >
		    <h3 className="vertical-timeline-element-title">Missionary - The Church of Jesus Christ of Latter-day Saints</h3>
		    <h4 className="vertical-timeline-element-subtitle">Gilbert, Arizona</h4>
		    <p>
		      For two years, I volunteered in Arizona. I helped with humanitarian projects and taught everyone I could about how to live a <a href="https://www.mormon.org/">happy life</a>.
		    </p>
		  </VerticalTimelineElement>

		  <VerticalTimelineElement
		    className="vertical-timeline-element--work"
		    date="2012 - 2013"
		    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
				</svg> }
		  >
		    <h3 className="vertical-timeline-element-title">Brigham Young University</h3>
		    <h4 className="vertical-timeline-element-subtitle">Provo, Utah</h4>
		    <p>
		      I went to BYU to study Mechanical Engineering and Computer Science.
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vertical-timeline-element--school"
		    date="1994-2012"
		    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
		    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
				    <path d="M0 0h24v24H0z" fill="none"/>
				</svg> }
		  >
		    <h3 className="vertical-timeline-element-title">Early Life</h3>
		    <h4 className="vertical-timeline-element-subtitle">Eagle, Idaho</h4>
		    <p>
		      I grew up in Eagle, Idaho. I love tennis and football and come from a family of 9!
		    </p>
		  </VerticalTimelineElement>

		</VerticalTimeline>

	);
}

}
export default About;
