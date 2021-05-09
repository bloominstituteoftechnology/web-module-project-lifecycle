import React from "react";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
	state = { username: "", userData: {} };

	componentDidMount() {
		axios.get("https://api.github.com/users/hanselviva").then((res) => {
			this.setState({
				userData: res.data,
			});
			console.log(res.data);
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Your Github Username <br />
						<input type="text" placeholder="Enter Your Username" />
					</label>
					<button>Submit</button>
				</form>

				<Card username={this.state.username} userData={this.state.userData} />
			</div>
		);
	}
}

export default App;
