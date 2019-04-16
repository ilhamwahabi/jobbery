import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import actions from '../actions';

class Navbar extends Component {
	changeKeyword = event => this.props.changeField('keyword', event.target.value)
	changeLocation = event => this.props.changeField('location', event.target.value)
	changeIsFullTime = event => this.props.changeField('isFullTime', event.target.checked)

	onSubmit = event => {
		event.preventDefault();
		this.props.getJobs();
	};

	render() {
		const { keyword, location, isFullTime } = this.props.form;

		return (
			<div className="navbar navbar-expand-md navbar-light bg-light">
				<a className="navbar-brand d-flex">
					<img
						src="./../assets/icon.png"
						alt="jobberry"
						width="30"
						height="30"
					/>
					<span className="ml-2">Jobbery</span>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbar-collapse"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<form
					onSubmit={this.onSubmit}
					id="navbar-collapse"
					className="form-inline collapse navbar-collapse my-2"
				>
					<div className="input-group ml-none ml-md-auto">
						<input
							type="text"
							class="form-control"
							placeholder="Keyword"
							value={keyword}
							onInput={this.changeKeyword}
						/>
					</div>
					<div className="input-group mx-2">
						<select
							class="custom-select" id="country-select"
							value={location} onChange={this.changeLocation}
						>
							<option value="id">Indonesia</option>
							<option value="us">United States</option>
						</select>
					</div>
					<div class="form-check mx-2">
						<input
							class="form-check-input"
							id="inlineFormCheck"
							type="checkbox"
							value={isFullTime}
							onChange={this.changeIsFullTime}
						/>
						<label class="form-check-label" for="inlineFormCheck">
							Full time
						</label>
					</div>
					<button type="submit" className="btn btn-outline-dark">
						Search
					</button>
				</form>
			</div>
		);
	}
}

// const actions = store => ({

// })

export default connect('form', actions)(Navbar);
