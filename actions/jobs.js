import GithubJobs from '../api/GithubJobs';

const jobsActions = (store) => ({
	async getJobs({ forms }) {
		const { data } = await GithubJobs.get(`/jobs
			?description=${forms.keyword}
			&location=${forms.location}
			&full_time=${forms.isFullTime}`
		);

		store.setState({ jobs: data });
	}
});

export default jobsActions;