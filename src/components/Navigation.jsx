import React,{Component} from  'react';
 import {Link} from 'react-router';

class Navigation extends Component{  
	render(){
	return(
	   <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item">
			        <Link to={'/aboutus/profile'} className="nav-link">Profile</Link>
			      </li>
			      <li className="nav-item">
			        <Link to={'/aboutus/team'} className="nav-link">Team</Link>
			      </li>
			      <li className="nav-item my-2 my-lg-0">
			        <Link to={'/aboutus/contactus'} className="nav-link">Contact Us</Link>
			      </li>
			    </ul>
			  </div>
	     	</nav>
	   </div>
	)
	}
}



export default Navigation;