import React from 'react';
import classNames from 'classnames';
import TypeA from './a';
import TypeB from './b';
import TypeC from './c';
import TypeD from './d';

const list = new Array(5000).fill(0).map((v, index) => index);

class Boxes extends React.Component {
	constructor() {
		super();

		this.boxComponents = {
			a : TypeA,
			b : TypeB,
			c : TypeC,
			d : TypeD,
		};

		this.state = {
			boxComponentKey: 'a',
			perspective: false,
		};
	}

	toggleActiveComponent = boxComponentKey => event => {
		event.preventDefault();

		this.setState({ boxComponentKey });
	}

	togglePerspective = () => this.setState(state => ({ perspective: !state.perspective }))

	render() {
		const {
			perspective,
			boxComponentKey,
		} = this.state;
		const BoxComponent = this.boxComponents[boxComponentKey];

		return (
			<React.Fragment>
				<nav>
					<ul>
						<li>
							<a
								href="##"
								className={ classNames({ active : boxComponentKey === 'a' }) }
								onClick={ this.toggleActiveComponent('a') }
							>
								Example A
							</a>
						</li>
						<li>
							<a
								href="##"
								className={ classNames({ active : boxComponentKey === 'b' }) }
								onClick={ this.toggleActiveComponent('b') }
							>
								Example B
							</a>
						</li>
						<li>
							<a
								href="##"
								className={ classNames({ active : boxComponentKey === 'c' }) }
								onClick={ this.toggleActiveComponent('c') }
							>
								Example C
							</a>
						</li>
						<li>
							<a
								href="##"
								className={ classNames({ active : boxComponentKey === 'd' }) }
								onClick={ this.toggleActiveComponent('d') }
							>
								Example D
							</a>
						</li>
					</ul>
				</nav>
				<button
					className="btn"
					onClick={ this.togglePerspective }
				>
					Toggle Perspective
				</button>
				<div
					className={ classNames('perspective', {
						row : perspective,
						column : !perspective,
					}) }
				>
					{ list.map(number => <BoxComponent key={ number } number={ number } />) }
				</div>
			</React.Fragment>
		);
	}
}

export default Boxes;
