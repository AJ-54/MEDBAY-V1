import React from "react";
import {
	Card,
	CardBody,
	Table,
	CardTitle,
	Label,
	Input,
	Row,
	Col,
	Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const LatestTransaction = () => {
	return (
		<Row>
			<Col lg={12}>
				<Card>
					<CardBody>
						<CardTitle className="h4 mb-4">
							Latest Transaction
						</CardTitle>
						<div className="table-responsive">
							<Table className="table-centered table-nowrap mb-0">
								<thead className="table-light">
									<tr>
										<th style={{ width: "20px" }}>
											<div className="form-check font-size-16">
												<Input
													type="checkbox"
													className="form-check-input"
													id="customCheck1"
												/>
												<Label
													className="form-check-label"
													for="customCheck1"
												>
													&nbsp;
												</Label>
											</div>
										</th>
										<th>Order ID</th>
										<th>Billing Name</th>
										<th>Date</th>
										<th>Total</th>
										<th>Payment Status</th>
										<th>Payment Method</th>
										<th>View Details</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="form-check font-size-16">
												<Input
													type="checkbox"
													className="form-check-input"
													id="customCheck2"
												/>
												<Label
													className="form-check-label"
													for="customCheck2"
												>
													&nbsp;
												</Label>
											</div>
										</td>
										<td>
											<Link
												to="#"
												className="text-body fw-bold"
											>
												#MB2540
											</Link>{" "}
										</td>
										<td>Jayit Saha</td>
										<td>03 Sept, 2021</td>
										<td>Rs 400</td>
										<td>
											<span className="badge rounded-pill bg-soft-success font-size-12">
												Paid
											</span>
										</td>
										<td>
											<i className="fab fa-cc-mastercard me-1"></i>{" "}
											Mastercard
										</td>
										<td>
											<Button
												type="button"
												color="primary"
												className="btn-sm btn-rounded waves-effect waves-light"
											>
												View Details
											</Button>
										</td>
									</tr>

									<tr>
										<td>
											<div className="form-check font-size-16">
												<Input
													type="checkbox"
													className="form-check-input"
													id="customCheck3"
												/>
												<Label
													className="form-check-label"
													for="customCheck3"
												>
													&nbsp;
												</Label>
											</div>
										</td>
										<td>
											<Link
												to="#"
												className="text-body fw-bold"
											>
												#MB2541
											</Link>{" "}
										</td>
										<td>Jamal Burnett</td>
										<td>07 Sept, 2021</td>
										<td>Rs 380</td>
										<td>
											<span className="badge rounded-pill bg-soft-danger font-size-12">
												Chargeback
											</span>
										</td>
										<td>
											<i className="fab fa-cc-visa me-1"></i>{" "}
											Visa
										</td>
										<td>
											<Button
												type="button"
												color="primary"
												className="btn-sm btn-rounded waves-effect waves-light"
											>
												View Details
											</Button>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};

export default LatestTransaction;
