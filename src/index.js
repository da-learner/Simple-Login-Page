import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory } from 'react-router';
import {firebaseApp} from './firebase';
import {logUser} from './actions';
import reducer from './reducers';
import './index.css';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Team from './components/Team';
import Contact from './components/Contact';
import registerServiceWorker from './registerServiceWorker';

const store =createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user=>{
	if(user){
		console.log('user has sign',user);
		const {email} =user;
		store.dispatch(logUser(email));
		browserHistory.push('/aboutus');
	}
	else{
		console.log('user has signed out');
		browserHistory.replace('/signin');
	}

})
ReactDOM.render(
	<Provider store={store}>
		<Router path="/" history={browserHistory}>
			<Route path="/aboutus" component={About} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
			<Route path="/aboutus/profile" component={Profile} />
			<Route path="/aboutus/team" component={Team} />
			<Route path="/aboutus/contactus" component={Contact} />
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
