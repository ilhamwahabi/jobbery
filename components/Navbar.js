import { h, Component } from 'preact';

class Navbar extends Component {
	onSubmit = (event) => {
		event.preventDefault();
	}

	render() {
		return (
			<div className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand d-flex">
					<img src="./../assets/icon.png" alt="jobberry" width="30" height="30" />
					<span className="ml-2">Jobbery</span>
				</a>
				<button
					className="navbar-toggler" type="button"
					data-toggle="collapse" data-target="#navbar-collapse"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<form
					onSubmit={this.onSubmit}  id="navbar-collapse"
					className="form-inline collapse navbar-collapse"
				>
					<div className="input-group ml-auto">
						<input type="text" class="form-control" placeholder="Keyword" />
					</div>
					<div className="input-group mx-2">
						<select class="custom-select" id="country-select">
							<option selected>Choose location</option>
							<option value="id">Indonesia</option>
							<option value="us">United States</option>
						</select>
					</div>
					<div class="form-check mx-2">
						<input class="form-check-input" type="checkbox" id="inlineFormCheck" />
						<label class="form-check-label" for="inlineFormCheck">
							Full time
						</label>
					</div>
					<button type="submit" className="btn btn-outline-dark">Search</button>
				</form>
			</div>
		);
	}
}

export default Navbar;