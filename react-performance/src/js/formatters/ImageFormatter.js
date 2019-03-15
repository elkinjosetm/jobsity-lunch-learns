import React, { Component } from 'react';

class ImageFormatter extends Component {
	render() {
		const { src } = this.props;

		return (
			<img
				src={ src }
				alt="Profile"
			/>
		);
	}
}

export default ImageFormatter;
