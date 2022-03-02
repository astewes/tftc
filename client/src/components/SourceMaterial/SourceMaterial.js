const SourceMaterial = (props) => {
	let sources = <p>No sources to display.</p>;

	if (props.sources) {
		sources = (
			<ul>
				{props.sources.map((source, idx) =>
					<li key={idx}>
						<a href={source.link} target="_blank" rel="noopener noreferrer">
							{source.publication} – {source.headline}
						</a>
					</li>
				)}
			</ul>
		);
	}

	return (
		<div className="SourceMaterial">
			<h3>Episode Source Material</h3>
			{sources}
		</div>
	);
};

export default SourceMaterial;
