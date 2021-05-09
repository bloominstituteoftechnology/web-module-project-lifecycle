import React from "react";

class Card extends React.Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {  }
	// }

	render() {
		const { username, userData } = this.props;

		return (
			<div className="card">
				<img className="avatar" src={userData.avatar_url} /> <br />
				username: {username} <br />
				name: {userData.name} <br />
				website: {userData.blog} <br />
				location: {userData.location} <br />
				followers: {userData.followers} <br />
				following: {userData.following}
			</div>
		);
	}
}

export default Card;
