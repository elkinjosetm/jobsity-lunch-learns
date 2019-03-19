import React from 'react';

/**
 * ------------ FAST ------------
 * no re-render, fine-granular shouldComponentUpdate check
 */
export default class Box extends React.Component {
	shouldComponentUpdate = (nextProps, nextState) => {
		return (
			this.props.number !== nextProps.number
		);
	}

	render() {
		console.log('Type C - render box');

		return <div className="box">{ this.props.number }</div>;
	}
}
