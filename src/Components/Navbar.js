import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg bg-body-tertiary bg-dark "
			data-bs-theme="dark">
			<div className="container d-flex justify-content-between">
				<Link
					className="navbar-brand"
					to="/">
					React CRUD
				</Link>

				<button
					className="btn btn-primary"
					type="submit">
					<Link
						to="/employee/add"
						className="text-white text-decoration-none">
						Add Employee
					</Link>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
