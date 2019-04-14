import './node_modules/bootstrap/dist/css/bootstrap.min.css';

import { h } from 'preact';

import './style';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobList from './components/JobList';

const App = () => (
	<div className="App d-flex flex-column justify-content-between">
		<Navbar />
		<JobList />
		<Footer />
	</div>
);

export default App;