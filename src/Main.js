import React, { Component } from 'react';
import UserOutput from './components/UserOutput';

class Main extends Component {
	state = { nameList: [{ name: 'Dave' }, { name: 'Paula' }, { name: 'Kevin' }, { name: 'Justin' }] };

	// UserName = () => {
	// 	this.useState({
	// 		nameList: [{ name: 'Dave' }, { name: 'Paula' }, { name: 'Kevin' }, { name: 'Justin' }],
	// 	});
	// };

	render() {
		return (
			<div className="App">
				<UserOutput name={this.state.nameList[0].name} />
				<UserOutput name={this.state.nameList[1].name} />
				<UserOutput name={this.state.nameList[2].name} />
				<UserOutput name={this.state.nameList[3].name} />
			</div>
		);
	}
}

export default Main;
