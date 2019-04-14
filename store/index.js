import createStore from 'unistore';

const store = createStore({
	jobs: [],
	form: { keyword: '', location: 'us', isFullTime: false }
});

export default store;