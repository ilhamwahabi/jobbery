import { h, Component } from 'preact';
import GithubJobs from '../api/GithubJobs';
import Jobs from './Job';

class JobList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobs: []
		};

		GithubJobs
			.get('/jobs?description=react&location=usa')
			.then(response => this.setState({ jobs: response.data }));
	}

	renderJobs() {
		return this.state.jobs.map(job => <Jobs key={job.id} {...job} />);
	}

	render() {
		return (
			<div style={{ flex: 1 }} className="container py-3">
				<div className="row">
					{this.renderJobs()}
				</div>
			</div>
		);
	}
}

export default JobList;