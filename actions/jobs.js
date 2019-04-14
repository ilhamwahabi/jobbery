import GithubJobs from '../api/GithubJobs';

const actions = (store) => ({
	async getJobs({ forms }) {
		const { data } = await GithubJobs.get(`/jobs
			?description=${forms.keyword}
			&location=${forms.location}
			&full_time=${forms.isFullTime}`
		);

		return store.setState({ jobs: data });
	}
});

export default actions;