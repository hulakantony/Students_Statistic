import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './style.css'

export default class Home extends Component{	
	onSubmit(e){
		e.preventDefault();
		const VALID_EMAIL = /^\w+@\w+\.\w{2,4}$/i;
		const { email, pass } = this.refs;
		const emailVal = email.value;
		if(!VALID_EMAIL.test(emailVal)){
			alert('Your Email is not valid');
			return;
		}
		const loggedIn = {
			email: email.value,
			pass: pass.value,
		}
		window.localStorage.setItem('std_login', JSON.stringify(loggedIn))		
		browserHistory.push('/students')
	}
	render(){
		return (
			<div>				
				<h3>Login</h3>
				<form onSubmit={(e) => this.onSubmit(e)} className="login-form">
					<label>E-mail: <input type='text' required defaultValue='' ref='email' /></label>
					<label>Password: <input type='password' required defaultValue='' ref='pass' /></label>
					<input type="submit" value='go'/>
				</form>
			</div>
		)
	}
}