import Episode from './Episode/Episode';
import './Episodes.css';

const Episodes = props => {
	return (
		<div className="Episodes">
			<h1>Episodes</h1>
			<div className="grid">
				{[...props.data].reverse().map(ep =>
					<Episode key={ep.number} data={ep} />
				)}
			</div>
		</div>
	);
};

export default Episodes;
