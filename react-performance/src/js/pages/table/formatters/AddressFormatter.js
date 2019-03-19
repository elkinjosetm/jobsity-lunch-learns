import React, { Component } from 'react';

class AddressFormatter extends Component {
	render() {
		const {
			street,
			city,
			state,
		} = this.props;

		return (
			<div className="address">
				<p><strong>Street:</strong> { street }</p>
				<p><strong>City:</strong> { city }</p>
				<p><strong>State:</strong> { state }</p>
			</div>
		);
	}
}

export default AddressFormatter;
