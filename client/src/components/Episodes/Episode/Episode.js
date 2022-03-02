import './Episode.css';
import { Link } from 'react-router-dom';

const Episode = props => {
	const slugify = title => title.replace(/[\s.]+/g, '-').toLowerCase();
	const thumbnail = `${process.env.PUBLIC_URL}/thumbnails/${props.data.thumbnail}`;

	return (
		<div className="Episode">
			<img className="thumbnail" src={thumbnail} alt={props.data.title} />
			<Link to={`/episodes/${slugify(props.data.title)}`}>
				<h2><span>Episode {props.data.number}: </span>{props.data.title}</h2>
			</Link>
			<time>{props.data.date}</time>
			<p>{props.data.description}</p>
			<button>
				<Link to={`/episodes/${slugify(props.data.title)}`}>
					Listen now
				</Link>
			</button>
		</div>
	);
};

export default Episode;
