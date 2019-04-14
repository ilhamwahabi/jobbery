import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import JobsActions from '../actions/jobs';
import Jobs from './Job';

class JobList extends Component {
	constructor(props) {
		super(props);
		props.getJobs();
	}

	renderJobs() {
		return this.props.jobs.map(job => <Jobs key={job.id} {...job} />);
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

export default connect('jobs', JobsActions)(JobList);