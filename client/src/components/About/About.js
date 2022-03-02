import host from '../../assets/images/host.jpg';
import './About.css';

const About = () => {

	return (
		<div className="About">
			<div>
				<h1>About Tales From the Closet</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Eget nunc lobortis mattis aliquam faucibus purus in. Sed blandit libero volutpat sed cras ornare arcu dui. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Tempus imperdiet nulla malesuada pellentesque elit eget. Tempor id eu nisl nunc mi. Et ligula ullamcorper malesuada proin libero. Sed felis eget velit aliquet sagittis id. Eu facilisis sed odio morbi quis. Nisi porta lorem mollis aliquam ut porttitor leo. Mi sit amet mauris commodo quis. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Proin nibh nisl condimentum id venenatis a condimentum. Eu augue ut lectus arcu bibendum at. Leo vel fringilla est ullamcorper. Ac tortor vitae purus faucibus ornare suspendisse sed. Interdum velit euismod in pellentesque massa placerat duis.</p>
			</div>
			<div className="Team">
				<h2>Meet The Team</h2>
				<div>
					<img src={host} alt="Andrew Westlund, Host" />
					<h3>Andrew Westlund</h3>
					<p><i>Host</i></p>
					<p>Eget nunc lobortis mattis aliquam faucibus purus in. Sed blandit libero volutpat sed cras ornare arcu dui. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Tempus imperdiet nulla malesuada pellentesque elit eget. Tempor id eu nisl nunc mi. Et ligula ullamcorper malesuada proin libero. Sed felis eget velit aliquet sagittis id. Eu facilisis sed odio morbi quis. Nisi porta lorem mollis aliquam ut porttitor leo.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
