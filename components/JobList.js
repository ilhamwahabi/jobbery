import { h, Component } from 'preact';
import GithubJobs from '../api/GithubJobs';

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
		return this.state.jobs.map(job => <div key={job.id}>{job.title}</div>);
	}

	render() {
		return <div style={{ flex: 1 }} className="container py-3">{this.renderJobs()}</div>;
	}
}

export default JobList;