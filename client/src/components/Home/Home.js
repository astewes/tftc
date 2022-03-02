import Episode from '../Episodes/Episode/Episode';
import { Link } from 'react-router-dom';
import './Home.css';
import artwork from '../../assets/images/artwork-500x500.png';

const Home = (props) => {
	console.log('props: ', props);
	return (
		<div className="Home">
			<div className="hero-wrapper">
				<div className="hero">
					<img src="https://via.placeholder.com/1075x700" alt="" />
					<div className="cta">
						<img src={artwork} alt="Artwork" />
						<h1>Tales From The Closet</h1>
						<h2>A True Crime Podcast</h2>
					</div>
				</div>
			</div>
			<div className="latest">
				<div>
					<h2>Latest Episodes</h2>
					<button>
						<Link to="/episodes">View all</Link>
					</button>
				</div>
				<div className="grid">
					{[...props.data].reverse().slice(0, 3).map(ep =>
						<Episode key={ep.number} data={ep} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
