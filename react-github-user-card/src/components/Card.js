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
				{username}
				username: {username} <br />
				name: {username} <br />
				location: {username} <br />
				followers: {username} <br />
				following: {username}
			</div>
		);
	}
}

export default Card;
