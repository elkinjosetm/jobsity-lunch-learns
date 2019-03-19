import React, { Component } from 'react';

class GenderFormatter extends Component {
	render() {
		const { gender } = this.props;

		return (
			<span>
				{ gender }
			</span>
		);
	}
}

export default GenderFormatter;
