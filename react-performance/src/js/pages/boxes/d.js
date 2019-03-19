import React from 'react';

/**
 * ------------ FAST ------------
 * no re-render, shallow shouldComponentUpdate check
 */
export default class Box extends React.PureComponent {
	render() {
		console.log('Type D - render box');

		return <div className="box">{ this.props.number }</div>;
	}
}
