import React from "react";

class Card extends React.Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {  }
	// }

	render() {
		const { userData, followers } = this.props;

		return (
			<div className="card">
				<div className="user-data">
					<img alt="avatar" className="avatar" src={userData.avatar_url} />{" "}
					<br />
					name: {userData.name} <br />
					website: {userData.blog} <br />
					location: {userData.location} <br />
					followers: {userData.followers} <br />
					following: {userData.following}
				</div>
				<div className="followers">followers:</div>
				{followers.map((follower) => {
					return (
						<div key={follower.id}>
							<a href={follower.html_url}>{follower.login}</a>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Card;
