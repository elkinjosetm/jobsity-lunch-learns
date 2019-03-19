import React from 'react';

/**
 * ------------ SLOW ------------
 */
export default class Box extends React.Component {
	render() {
		console.log('Type B - render box');

		return <div className="box">{ this.props.number }</div>;
	}
}
