import createStore from 'unistore';

const store = createStore({
	jobs: [],
	forms: { keyword: '', location: 'us', isFullTime: false }
});

export default store;