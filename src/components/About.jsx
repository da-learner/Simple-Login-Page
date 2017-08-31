import React,{Component} from 'react';
import {connect} from 'react-redux';
import Navigation from './Navigation';
 import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
import Header from './Header';
import '../index.css';

class About extends Component{
	constructor(props){
		super(props);
		this.signOut = this.signOut.bind(this);
	}
	signOut(){
	firebaseApp.auth().signOut();
	}
	render(){
		return(
		<div>
			<div className="header">
				<div className="row">
					<div className="col-lg-10">
						<h2><Link to={'/aboutus'}>About Us</Link></h2>
					</div>
					<div className="col-lg-2 signout">
						<button type="submit" className="btn btn-default" onClick={this.signOut}>Sign Out</button>
					</div>
				</div>
				<Navigation />
			</div>
			<div className="about row" style={{padding: '25px',margin: '0% 5%',textAlign: 'justify'}}>
           		<div className="col-lg-12">
           			<div>
           			<div className="info">
           				<h4>Inteliment Technologies</h4>
	           			<p>
		           			Inteliment Technologies, is an Indian multinational provider of business consulting, technology, engineering and outsourcing services company. It has offices in Australia, Singapore and India, and has its headquarters in Pune, Maharashtra
           				</p>
           				</div>
           				<h4>History</h4>
           				<p>
           					Inteliment was founded in 2004 by Mr.Prashant Pansare to build tools and applications for Business Analytics in Cloud Technology and on Mobility. Since its inception, the company has grown steadily and was one of India's top 25 'most promising' Business Intelligence solutions provider according to CIO Review India - November 2013 Issue.
           				</p>
           				<h4>Client Base</h4>
           				<p>
           					Inteliment Technologies provides services to clients across Manufacturing, Financial Services, Telecom, Steel, Cement, Healthcare, Engineering & Projects, Retail and Hi-Tech domains.
           				</p>
           				<h4>Awards and recognitions</h4>
           				<p>
           					<ul>
           						<li>Recognized by the government of Maharashtra as an ‘Innovative IT SME’ for 2011</li>
           						<li>ndira Innovation Award 2011</li>
           						<li>Awarded Entrepreneurial Company by World Confederation of Business, USA 2010</li>
           						<li>Recognized as of Deloitte Asia’s Technology Fast 500 in 2009 and 2008</li>
           						<li>International Technology Excellence Award by World Economic Progress Society</li>
           						<li>Winner of Deloitte India’s Technology Fast 50 in 2008.</li>
           						<li>Business Excellence Award by CII-EXIM</li>
           					</ul>
           				</p>
           			</div>
           		</div>
           </div>
		</div>
		)
	}
}

function mapStateToProps(state){
	console.log('state',state);
	return {}
}
export default connect(mapStateToProps,null)(About);