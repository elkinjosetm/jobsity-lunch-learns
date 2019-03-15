import React, { Component } from 'react';

class EmailFormatter extends Component {
	render() {
		const { email } = this.props;

		return (
			<span>
				{ email }
			</span>
		);
	}
}

export default EmailFormatter;
