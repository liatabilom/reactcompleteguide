import React, { Component } from 'react';
import UserInput from './UserInput';

class UserOutput extends Component {
	render() {
		return (
			<div>
				<p>Hello, my name is {this.props.name}</p>
				<p>I love pizza</p>
				<UserInput />
			</div>
		);
	}
}

export default UserOutput;
