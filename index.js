import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';

import { h } from 'preact';

import './style';

import Navbar from './components/Navbar';

const App = () => (
	<div>
		<Navbar />
	</div>
);

export default App;