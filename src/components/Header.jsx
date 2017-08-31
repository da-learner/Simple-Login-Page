import React,{Component} from  'react';
import Navigation from './Navigation';
 import {Link} from 'react-router';
import '../index.css';
 
class Header extends Component{  
	render(){
	return(
	   <div>
        	<div className="header">
				<div className="row">
					<div className="col-lg-10">
						<h2><Link to={'/aboutus'}>About Us</Link></h2>
					</div>
					<div className="col-lg-2 signout">
					</div>
				</div>
				<Navigation />
			</div>
	   </div>
	)
	}
}



export default Header;