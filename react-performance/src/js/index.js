import '../styles/index.css';
import React, { Component } from 'react';
import logo from '../images/logo.png';
import ImageFormatter from './formatters/ImageFormatter';
import NameFormatter from './formatters/NameFormatter';
import GenderFormatter from './formatters/GenderFormatter';
import EmailFormatter from './formatters/EmailFormatter';
import AddressFormatter from './formatters/AddressFormatter';
import DateFormatter from './formatters/DateFormatter';

class App extends Component {
	constructor() {
		super();

		this.state = {
			data : [],
			searchQuery : '',
		};

		this.fetchData();
	}

	fetchData = () => {
		fetch('http://localhost:4444/users')
			.then(response => (response.json()))
			.then(data => this.setState({ data }))
			.catch(error => {
				console.log('There was a problem:' + error.message);
			});
	}

	onChange = event => this.setState({ searchQuery : event.target.value })

	render() {
		const {
			data,
			searchQuery,
		} = this.state;

		return (
			<React.Fragment>
				<header>
					<div className="brand">
						<img
							src={ logo }
							alt="logo"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="search">Search</label>
						<input
							id="search"
							value={ searchQuery }
							className="form-control"
							placeholder="Search"
							onChange={ this.onChange }
						/>
					</div>
				</header>
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Gender</th>
								<th>Address</th>
								<th>Birth Date</th>
							</tr>
						</thead>
						<tbody>
							{ data.map((item, index) => (
								<tr key={ `item_${index}` }>
									<td>
										<ImageFormatter
											src={ item.picture }
										/>
									</td>
									<td>
										<NameFormatter
											firstName={ item.first_name }
											lastName={ item.last_name }
										/>
									</td>
									<td>
										<EmailFormatter
											email={ item.email }
										/>
									</td>
									<td>
										<GenderFormatter
											gender={ item.gender }
										/>
									</td>
									<td>
										<AddressFormatter
											street={ item.street }
											city={ item.city }
											state={ item.state }
										/>
									</td>
									<td>
										<DateFormatter
											date={ item.birth_date }
										/>
									</td>
								</tr>
							)) }
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
