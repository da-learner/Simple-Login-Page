import React,{Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignIn extends Component{
	constructor(props){
	super(props);
	this.state={
	email:'',
	password:'',
	error:{
	message:''
		}
		}
		this.signIn = this.signIn.bind(this);
	}
	signIn(e){
	e.preventDefault();
	console.log('this.state',this.state);
	const {email,password} = this.state;
	firebaseApp.auth().signInWithEmailAndPassword(email,password).catch(error=>{
	this.setState({error})
		})
	}
	render(){
		return(
		<div>
			<div className="signin">
				<h2>Sign In</h2>
				<form>
				  <div className="form-group">
				    <label htmlFor="exampleInputEmail1">Email address</label>
				    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={event=>this.setState({email:event.target.value})} />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Password</label>
				    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={event=>this.setState({password:event.target.value})} />
				  </div>
				  <div className="form-check">
				    <label className="form-check-label">
				      <input type="checkbox" className="form-check-input"/>
				      Check me out
				    </label>
				  </div>
				  <button type="submit" className="btn btn-danger" onClick={this.signIn}>Sign In</button>
				</form>
			</div>	
			<div className="directto"><Link to={'/signup'}>Sign Up Instead</Link></div>
		</div>
		)
	}
}
export default SignIn;