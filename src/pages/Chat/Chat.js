import { Component } from "react";

import Weavy from "../../weavy/Weavy";
import WeavyApp from "../../weavy/WeavyApp";

export default class App extends Component {
	async getJwt() {
		var token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSVNISVRBIERPQ1RPUiIsImlzcyI6IjAwM2NjMjljLTgwNDQtNDc4OC04OWE1LWZiYmJjMTRmZmUxZCIsImV4cCI6MjEyMjEyMjIyMywiZW1haWwiOiJpc2hpdGFkb2N0b3JAd2VhdnkuY29tIiwic3ViIjoiaXNoaXRhZG9jdG9yQHdlYXZ5LmNvbSIsImNsaWVudF9pZCI6IjAwM2NjMjljLTgwNDQtNDc4OC04OWE1LWZiYmJjMTRmZmUxZCJ9.5r122QhXYuIgrJwVuE1r-1Cox6t0L-vRAo4iVfr0AKw";
		return token;
	}

	render() {
		return (
			<Weavy jwt={this.getJwt}>
				<div className="App" style={{ marginTop: "10px" }}>
					<WeavyApp
						spaceKey="react-space"
						spaceName="React Space"
						appKey="react-messenger"
						appName="React Messenger"
						appType="messenger"
						height="870px"
					/>
				</div>
			</Weavy>
		);
	}
}
