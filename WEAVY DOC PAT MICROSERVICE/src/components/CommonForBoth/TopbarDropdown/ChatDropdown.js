import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import Weavy from "../../../weavy/Weavy";
import WeavyApp from "../../../weavy/WeavyApp";

//i18n
import { withTranslation } from "react-i18next";

const NotificationDropdown = (props) => {
	// Declare a new state variable, which we'll call "menu"
	const [menu, setMenu] = useState(false);

	var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWl0IiwiZXhwIjoxNTE2MjM5MDIyLCJpc3MiOiJiOWYwNGJjZS0zOWE0LTRiZTUtOTI4ZC0wMTkyYzIyNDQ3ODMiLCJlbWFpbCI6ImpheWl0c2FoYUBnbWFpbC5jb20ifQ.2ubu4C9eCY-XzlANr7eLYAS_T3ik6cNXjhtMMrWWPps";
	// var token = new JwtBuilder()
	// 	.WithAlgorithm(new HMACSHA256Algorithm())
	// 	.WithSecret("XsjMjenX-ur-4tntftzaN-:zP][LqwA0")
	// 	.AddClaim(
	// 		"exp",
	// 		DateTimeOffset.UtcNow.AddSeconds(60).ToUnixTimeSeconds()
	// 	)
	// 	.AddClaim("iss", "b9f04bce-39a4-4be5-928d-0192c2244783")
	// 	.AddClaim("sub", "jayit")
	// 	.AddClaim("client_id", "b9f04bce-39a4-4be5-928d-0192c2244783")
	// 	.Encode();

	return (
		<>
			<Dropdown
				isOpen={menu}
				toggle={() => setMenu(!menu)}
				className="dropdown d-inline-block"
				tag="li"
			>
				<DropdownToggle
					className="btn header-item noti-icon waves-effect"
					tag="button"
					id="page-header-notifications-dropdown"
				>
					<i className="uil-comment-alt"></i>
					{/* <span className="badge bg-danger rounded-pill">3</span> */}
				</DropdownToggle>

				<DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
					<Weavy jwt={token}>
						<div
							className="App"
							style={{ height: "200px!important" }}
						>
							<WeavyApp
								spaceKey="react-space"
								spaceName="React Space"
								appKey="react-messenger"
								appName="React Messenger"
								appType="messenger"
								height="400px"
							/>
						</div>
					</Weavy>
				</DropdownMenu>
			</Dropdown>
		</>
	);
};

export default withTranslation()(NotificationDropdown);

NotificationDropdown.propTypes = {
	t: PropTypes.any,
};
