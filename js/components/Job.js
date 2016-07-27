import React from 'react';

export default class Job extends React.Component {
	constructor(props) {
		super(props);

		console.log('this.props', this.props);
	}

	submitText(event) {
		console.log('event', event.target.value);
	}

	render() {
		return (
			<div className="container">
				<input
					type="text"
					onKeyUp={this.submitText}/>

			</div>
		)
	}
}

const styles = {
	title: {
		color: 'red'
	}
}
