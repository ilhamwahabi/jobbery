import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';

import { h } from 'preact';

import './style';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
	<div className="App d-flex flex-column justify-content-between">
		<Navbar />
		<Footer />
	</div>
);

export default App;