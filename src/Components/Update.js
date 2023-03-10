import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Update = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [role, setRole] = useState("");
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		loademployee();
	}, []);

	const loademployee = async () => {
		await axios.get(`http://localhost:5000/employs/${id}`).then((res) => {
			setName(res.data.employname);
			setEmail(res.data.employemail);
			setNumber(res.data.employnumber);
			setRole(res.data.employrole);
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userData = {
			employname: name,
			employemail: email,
			employnumber: number,
			employrole: role,
		};
		await axios.put(`http://localhost:5000/employs/${id}`, userData).catch((err) => {
			console.log(err.response.data);
		});
		return navigate("/");
	};
	return (
		<>
			<h1 className="text-center mt-2">Edit Employee Data</h1>
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
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary">
							Edit Employee Data
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Update;
