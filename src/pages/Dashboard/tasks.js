import React from "react";
import {
	Card,
	CardBody,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import Weavy from "../../weavy/Weavy";
import WeavyApp from "../../weavy/WeavyApp";

var token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSVNISVRBIERPQ1RPUiIsImlzcyI6IjAwM2NjMjljLTgwNDQtNDc4OC04OWE1LWZiYmJjMTRmZmUxZCIsImV4cCI6MjEyMjEyMjIyMywiZW1haWwiOiJpc2hpdGFkb2N0b3JAd2VhdnkuY29tIiwic3ViIjoiaXNoaXRhZG9jdG9yQHdlYXZ5LmNvbSIsImNsaWVudF9pZCI6IjAwM2NjMjljLTgwNDQtNDc4OC04OWE1LWZiYmJjMTRmZmUxZCJ9.5r122QhXYuIgrJwVuE1r-1Cox6t0L-vRAo4iVfr0AKw";

const RecentActivity = () => {
	return (
		<Card>
			<CardBody>
				<div className="float-end">
					<UncontrolledDropdown>
						<DropdownToggle
							tag="a"
							className="text-reset"
							id="dropdownMenuButton5"
							caret
						>
							<span className="text-muted">
								Recent
								<i className="mdi mdi-chevron-down ms-1"></i>
							</span>
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-end">
							<DropdownItem href="#">Recent</DropdownItem>
							<DropdownItem href="#">By Users</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</div>

				<h4 className="card-title mb-4">Tasks</h4>

				<SimpleBar
					className="activity-feed mb-0 ps-2"
					style={{ maxHeight: "336px" }}
				>
					<Weavy jwt={token}>
						<div className="App">
							<WeavyApp
								spaceKey="task-space"
								spaceName="Task Space"
								appKey="react-tasks"
								appName="React tasks"
								appType="tasks"
								height="330px"
							/>
						</div>
					</Weavy>
				</SimpleBar>
			</CardBody>
		</Card>
	);
};

export default RecentActivity;
