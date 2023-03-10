import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Input = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [role, setRole] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userData = {
			employname: name,
			employemail: email,
			employnumber: number,
			employrole: role,
		};
		await axios.post("http://localhost:5000/employs", userData).catch((err) => {
			console.log(err.response.data);
		});
		return navigate("/");
	};

	return (
		<>
			<h1 className="text-center mt-2">Add New Employee</h1>
			<div className="d-flex justify-content-center ">
				<div
					className="container border rounded p-3 m-3 d-flex justify-content-center bg-secondary-subtle shadow"
					style={{ width: "60%" }}>
					<form
						style={{ width: "80%" }}
						onSubmit={handleSubmit}>
						<div className="mb-3">
							<label
								htmlFor="exampleInputname"
								className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputname"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="exampleInputEmail1"
								className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="exampleInputnumber"
								className="form-label">
								Phone Number
							</label>
							<input
								type="number"
								className="form-control"
								id="exampleInputnumber"
								name="number"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
								required
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="exampleInputrole"
								className="form-label">
								Employee Role
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputrole"
								name="role"
								value={role}
								onChange={(e) => setRole(e.target.value)}
								required
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary">
							Add Employee
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Input;
