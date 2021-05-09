import React from "react";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
	state = { username: "", userData: {} };

	// on first render :
	componentDidMount() {
		axios.get("https://api.github.com/users/hanselviva").then((res) => {
			this.setState({
				userData: res.data,
			});
		});
	}

	//Dont need this:
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.username !== this.state.username) {
	// 		axios
	// 			.get(`https://api.github.com/users/${this.state.username}`)
	// 			.then((res) => {
	// 				this.setState({ userData: res.data });
	// 			});
	// 	}
	// }

	handleOnChange = (e) => {
		this.setState({ username: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(`https://api.github.com/users/${this.state.username}`)
			.then((res) => {
				this.setState({
					userData: res.data,
				});
				console.log(res.data);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
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

				<Card username={this.state.username} userData={this.state.userData} />
			</div>
		);
	}
}

export default App;
