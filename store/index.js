import createStore from 'unistore';

const store = createStore({
	jobs: [],
	forms: { keyword: '', location: '', isFullTime: false }
});

export default store;