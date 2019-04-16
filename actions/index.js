import GithubJobs from '../api/GithubJobs';

const jobsActions = (store) => ({
	changeField({ form }, type, value) {
		store.setState({ form: { ...form, [type]: value } });
	},
	
	async getJobs({ form }) {
		const { data } = await GithubJobs.get(`/jobs
			?description=${form.keyword}
			&location=${form.location}
			&full_time=${form.isFullTime}`
		);

		store.setState({ jobs: data });
	}
});

export default jobsActions;