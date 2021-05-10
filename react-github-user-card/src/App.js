import React from "react";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", userData: {}, followers: [] };
	}

	// on first render :
	componentDidMount() {
		axios
			.all([
				axios.get("https://api.github.com/users/hanselviva"),
				axios.get("https://api.github.com/users/hanselviva/followers"),
			])
			.then(
				axios.spread((res1, res2) => {
					this.setState({
						userData: res1.data,
						followers: res2.data,
					});
				}),
			);
	}

	// dom rerenders everytime user types. see shouldComponentUpdate
	componentDidUpdate(prevProps, prevState) {
		console.log("component did update");
	}

	handleOnChange = (e) => {
		this.setState({ username: e.target.value });
	};

	fetchUserData = (e) => {
		e.preventDefault();
		axios
			.all([
				axios.get(`https://api.github.com/users/${this.username}`),
				axios.get(`https://api.github.com/users/${this.username}/followers`),
			])
			.then(
				axios.spread((res1, res2) => {
					this.setState({
						userData: res1.data,
						followers: res2.data,
					});
				}),
			);
	};

	render() {
		console.log("Render");
		return (
			<div>
				<form onSubmit={this.fetchUserData}>
					<label>
						Your Github Username <br />
						<input
							type="text"
							placeholder="Enter Your Username"
							onChange={this.handleOnChange}
						/>
					</label>
					<button>Submit</button>
				</form>

				<Card
					username={this.state.username}
					userData={this.state.userData}
					followers={this.state.followers}
				/>
			</div>
		);
	}
}

export default App;
