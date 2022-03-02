const baseThumbnailUrl = "../../assets/images/thumbnails/";

let episodes = [
	{
		"number": 1,
		"title": "Christopher Woitel",
		"description": "A fiftysomething computer programmer living in San Francisco is seen entering his apartment, only to never be seen again.",
		"date": "TBD",
		"thumbnail": "christopher-woitel.jpg",
		"audio": "5s52js/Episode01_demo.mp3",
		"sources": [
			{
				"publication": "Mission Local",
				"headline": "Police investigating the mysterious disappearance of Christopher Woitel — one month later",
				"link": "https://missionlocal.org/2021/02/police-investigating-the-mysterious-disappearance-of-christopher-woitel-one-month-later/"
			},
			{
				"publication": "SF Examiner",
				"headline": "Christopher Woitel has been missing for over a month. His family is turning to the community for help",
				"link": "https://www.sfexaminer.com/news/christopher-woitel-has-been-missing-for-over-a-month-his-family-is-turning-to-the-community-for-help/"
			},
			{
				"publication": "SF Examiner",
				"headline": "Family reports missing man's body found",
				"link": "https://www.sfexaminer.com/news/family-reports-missing-mans-body-found-in-apartment-building/"
			},
			{
				"publication": "SF Gate",
				"headline": "Video shows an SF man enter his home. But a month later, he's nowhere to be found",
				"link": "https://www.sfgate.com/bayarea/article/christopher-woitel-missing-sf-news-latest-15950583.php"
			},
			{
				"publication": "SF Gate",
				"headline": "SF man missing over a month under mysterious circumstances found dead in apartment",
				"link": "https://www.sfgate.com/bayarea/article/woitel-missing-mission-sf-apartment-found-15953906.php"
			},
			{
				"publication": "SFist",
				"headline": "Missing Man Found Dead Inside Guerrero Street Apartment Building",
				"link": "https://sfist.com/2021/02/16/missing-man-found-dead-inside-guerrero-street-apartment-building/"
			},
			{
				"publication": "CBS Local",
				"headline": "Update: Family Travels From Chicago To Help Search For Missing San Francisco Man",
				"link": "https://sanfrancisco.cbslocal.com/2021/02/12/update-family-travels-chicago-help-search-missing-san-francisco-man/"
			},
			{
				"publication": "New York Daily News",
				"headline": "Missing computer programmer found dead in his San Francisco apartment building, family says",
				"link": "https://www.nydailynews.com/news/national/ny-missing-san-francisco-man-christopher-woitel-body-found-20210216-v5uomtgefzdqtlssz7xt3fceuy-story.html"
			},
			{
				"publication": "Chicago Tribune",
				"headline": "Oak Park native found dead in San Francisco after going missing more than a month, authorities say",
				"link": "https://www.chicagotribune.com/suburbs/oak-park/ct-oak-chris-woitel-tl-0225-20210218-oyqxh5cdwndtrp6gym4hzoffy4-story.html"
			},
			{
				"publication": "Websleuths",
				"headline": "CA - Christopher Woitel, 50, San Francisco, 9 Jan 2021",
				"link": "https://www.websleuths.com/forums/threads/ca-christopher-woitel-50-san-francisco-9-jan-2021.559279/"
			}
		]
	},
	{
		"number": 2,
		"title": "Peter W. Smith",
		"description": "A fiftysomething computer programmer living in San Francisco is seen entering his apartment, only to never be seen again.",
		"date": "TBD",
		"thumbnail": "peter-w-smith.jpg",
		"audio": "5s52js/Episode01_demo.mp3",
		"sources": [
			{
				"publication": "Chicago Tribune",
				"headline": "Peter W. Smith, GOP operative who sought Clinton's emails from Russian hackers, committed suicide, records show",
				"link": "https://www.chicagotribune.com/politics/ct-peter-smith-death-met-0713-20170713-story.html"
			},
			{
				"publication": "Legacy",
				"headline": "Waldo Sterling Smith, 1910 - 2002",
				"link": "https://www.legacy.com/us/obituaries/staugustine/name/waldo-smith-obituary?pid=491840"
			},
			{
				"publication": "The Wall Street Journal",
				"headline": "Details Emerge in Suicide of GOP Activist Who Sought Hillary Clinton Emails",
				"link": "https://www.wsj.com/articles/details-emerge-in-suicide-of-gop-activist-who-sought-hillary-clinton-emails-1500051276"
			},
			{
				"publication": "The Wall Street Journal",
				"headline": "GOP Operative Sought Clinton Emails From Hackers, Implied a Connection to Flynn",
				"link": "https://www.wsj.com/articles/gop-operative-sought-clinton-emails-from-hackers-implied-a-connection-to-flynn-1498770851"
			},
			{
				"publication": "The Guardian",
				"headline": "Murder of Kremlin critic in London 'was made to look like suicide'",
				"link": "https://www.theguardian.com/uk-news/2021/apr/09/murder-kremlin-critic-london-made-look-like-suicide-nikolai-glushkov"
			},
			{
				"publication": "Berkman Klein Center",
				"headline": "Partisanship, Propaganda, and Disinformation: Online Media and the 2016 U.S. Presidential Election",
				"link": "https://cyber.harvard.edu/publications/2017/08/mediacloud"
			}
		]
	},
	{
		"number": 3,
		"title": "Sneha Philip",
		"description": "A fiftysomething computer programmer living in San Francisco is seen entering his apartment, only to never be seen again.",
		"date": "TBD",
		"thumbnail": "sneha-philip.jpg",
		"audio": "5s52js/Episode01_demo.mp3",
		"sources": [
			{
				"publication": "New York Magazine",
				"headline": "Philip, Sneha Anne",
				"link": "https://nymag.com/news/9-11/10th-anniversary/sneha-anne-philip/"
			},
			{
				"publication": "The New York Times",
				"headline": "'Reopening Old Wounds': When 9/11 Remains Are Identified, 20 Years Later",
				"link": "https://www.nytimes.com/2021/09/06/nyregion/9-11-ground-zero-victims-remains.html"
			},
			{
				"publication": "New York Post",
				"headline": "SOLVED: THE LAST MYSTERY OF 9/11",
				"link": "https://nypost.com/2008/07/11/solved-the-last-mystery-of-911/"
			},
			{
				"publication": "Salon.com",
				"headline": "Your memory of 9/11 is probably wrong",
				"link": "https://www.salon.com/2021/09/08/your-memory-of-911-is-probably-wrong/"
			},
			{
				"publication": "Independent",
				"headline": "Sneha Philip: The mystery of the woman who disappeared on 9/11",
				"link": "https://www.independent.co.uk/news/world/americas/sneha-philip-mystery-disappeared-9-11-b1917381.html"
			},
			{
				"publication": "The Guardian",
				"headline": "Ground Zero stops burning, after 100 days",
				"link": "https://www.theguardian.com/world/2001/dec/20/september11.usa"
			},
			{
				"publication": "CNN",
				"headline": "9/11: 'A gray cloud of debris rolled violently toward us…'",
				"link": "https://www.cnn.com/2018/09/10/opinions/9-11-avlon/index.html"
			}
		]
	},
	{
		"number": 4,
		"title": "The Last Call Killer",
		"description": "A fiftysomething computer programmer living in San Francisco is seen entering his apartment, only to never be seen again.",
		"date": "TBD",
		"thumbnail": "the-last-call-killer.jpg",
		"audio": "5s52js/Episode01_demo.mp3"
	}
];

export function getEpisodes() {
	return episodes;
}

export function getEpisode(title) {
	const slugify = title => title.replace(/[\s.]+/g, '-').toLowerCase();

	return episodes.find(
		episode => slugify(episode.title) === title
	);
}
