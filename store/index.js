import createStore from 'unistore';
import devtools from 'unistore/devtools';

const initialState = {
	jobs: [],
	form: { keyword: '', location: 'us', isFullTime: false }
};

const store =
	process.env.NODE_ENV === 'production'
		? createStore(initialState)
		: devtools(createStore(initialState));

export default store;
