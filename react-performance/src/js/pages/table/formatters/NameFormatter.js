import React, { Component } from 'react';

class NameFormatter extends Component {
	render() {
		const {
			data,
		} = this.props;

		return (
			<React.Fragment>
				<p>
					{ data.first_name } { data.last_name }
				</p>
				<span>
					{ data.index }
				</span>
			</React.Fragment>
		);
	}
}

export default NameFormatter;
