import React, { Component } from 'react';
import NavLink from '../NavLink';


export default class List extends Component {
	render() {
		return (
			<div className="nav-wrapper">		
				<ul className='nav-links'>
					<li>
						<NavLink onlyActiveOnIndex={true} to='/home'>LOGIN</NavLink>
					</li>
					<li>
						<NavLink to='/students'>Students Table</NavLink>
					</li>							
				</ul>				
				{this.props.children}
			</div>
		);
	}
}