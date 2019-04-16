import { h } from 'preact';

const Footer = () => (
	<div className="container-fluid bg-light py-3 text-center">
		Made by Ilham Wahabi 2018
		<a
			href="https://github.com/iwgx/jobberry"
			target="_blank" rel="noopener noreferrer"
		>
			<img
				className="ml-2 mb-2" src="../assets/github.png"
				alt="github" width="20" height="20"
			/>
		</a>
	</div>
);

export default Footer;
