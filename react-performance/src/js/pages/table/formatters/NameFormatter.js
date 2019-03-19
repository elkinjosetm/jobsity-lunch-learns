import React, { Component } from 'react';

class NameFormatter extends Component {
	render() {
		const {
			firstName,
			lastName,
		} = this.props;

		return (
			<span>
				{ firstName } { lastName }
			</span>
		);
	}
}

export default NameFormatter;
