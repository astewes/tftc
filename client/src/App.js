import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Episodes from './components/Episodes/Episodes';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import Listen from './components/Listen/Listen';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { getEpisodes } from './components/Episodes/episodeList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			episodes: getEpisodes()
		}
	}

	render() {
		const { episodes } = this.state;
		const EpisodeWrapper = ({ episodes }) => {
			const slugify = title => title.replace(/[\s.]+/g, '-').toLowerCase();
			const { title } = useParams();
			const currentEpisode = episodes.find(episode => slugify(episode.title) === title);

			return <EpisodeDetails data={currentEpisode} />;
		};

		return (
			<>
				<BrowserRouter>
					<Header />
					<main>
						<Routes>
							<Route path="/" exact element={<Home data={episodes} />} />
							<Route path="episodes" element={<Episodes data={episodes} />} />
							<Route path="episodes/:title" element={<EpisodeWrapper episodes={episodes} />} />
							<Route path="listen" element={<Listen />} />
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
							<Route
								path="*"
								element={
									<div style={{ padding: "1rem" }}>
										<p>There's nothing here!</p>
									</div>
								}
							/>
						</Routes>
					</main>
				</BrowserRouter>
				<Footer />
			</>
		);
	}
}

export default App;
