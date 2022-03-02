import SourceMaterial from "../SourceMaterial/SourceMaterial";

const EpisodeDetails = props => {
	const baseUrl = `https://mcdn.podbean.com/mf/web/${props.data.audio}`;

	return (
		<div className="EpisodeDetails">
			<h1><span>Episode {props.data.number}: </span>{props.data.title}</h1>
			<p>{props.data.date}</p>
			<p>{props.data.description}</p>
			<audio controls>
				<source src={baseUrl} type="audio/mp3" />
			</audio>
			<SourceMaterial sources={props.data.sources} />
		</div>
	);
};

export default EpisodeDetails;
