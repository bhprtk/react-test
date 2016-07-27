import React from 'react';
// import {Component} from 'react';
import Job from './Job';

export default class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: 'eileen'
		}

		this.buttonClick = this.buttonClick.bind(this);

	}

	buttonClick() {
		this.setState({
			lastName: 'zhong',
			name: 'blah blah'
		})
	}

	render() {
		return (
			<div>

				<h1>{this.state.name} </h1>
				<h1>{this.state.lastName}</h1>
				<button onClick={this.buttonClick}>
					i hate you
				</button>

				<Job name={this.state} />
			</div>
		)
	}
}
