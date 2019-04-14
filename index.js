import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';

import { h } from 'preact';
import { Provider } from 'unistore/preact';

import store from './store';

import './style';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobList from './components/JobList';

const App = () => (
	<Provider store={store}>
		<div className="App d-flex flex-column justify-content-between">
			<Navbar />
			<JobList />
			<Footer />
		</div>
	</Provider>
);

export default App;
