import React, { Component } from 'react';

class AddressFormatter extends Component {
	render() {
		const {
			data,
		} = this.props;

		return (
			<div className="address">
				<p><strong>Street:</strong> { data.street }</p>
				<p><strong>City:</strong> { data.city }</p>
				<p><strong>State:</strong> { data.state }</p>
			</div>
		);
	}
}

export default AddressFormatter;
