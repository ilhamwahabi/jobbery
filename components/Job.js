import { h } from 'preact';

const Jobs = ({ id, title, company, location }) => (
	<div className="col-12 col-sm-6 mb-2">
		<div key={id} className="card h-100">
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle text-muted">
					{company} <span>({location})</span>
				</h6>
			</div>
		</div>
	</div>
);

export default Jobs;