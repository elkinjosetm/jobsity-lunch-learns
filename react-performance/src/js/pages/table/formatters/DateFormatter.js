import React, { Component } from 'react';

class DateFormatter extends Component {
	render() {
		const { date } = this.props;

		return (
			<span>{ date }</span>
		);
	}
}

export default DateFormatter;
