import { Component } from "react";

import Weavy from "../../weavy/Weavy";
import WeavyApp from "../../weavy/WeavyApp";

export default class App extends Component {
	async getJwt() {
		var token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTUVCREFZIE5VUlNFIiwiaXNzIjoiMmNiN2I4MWYtNmQzOS00M2IwLThhYmMtMTRlNGJlNmJhZGY0IiwiZXhwIjoyMTIyMTIyMjIzLCJlbWFpbCI6Im1lZGJheV9udXJzZUB3ZWF2eS5jb20iLCJzdWIiOiJtZWRiYXlfbnVyc2VAd2VhdnkuY29tIiwiY2xpZW50X2lkIjoiMmNiN2I4MWYtNmQzOS00M2IwLThhYmMtMTRlNGJlNmJhZGY0In0.vTEoCqLAg9Q2cC1eeYS3oLQbsD5woEdREkylDs3ZHAQ";
		return token;
	}

	render() {
		return (
			<Weavy jwt={this.getJwt}>
				<div className="App" style={{ marginTop: "70px" }}>
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
