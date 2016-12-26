import React, { Component } from 'react';
import { Link } from 'react-router';
import './nav.css'

export default class NavLink extends Component {
	render(){
		return <Link {...this.props} activeClassName='active'/>
	}
}