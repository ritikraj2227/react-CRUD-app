import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [role, setRole] = useState("");
	const { id } = useParams();

	useEffect(() => {
		loadUser();
	});

	const loadUser = async () => {
		await axios
			.get(`http://localhost:5000/employs/${id}`)
			.then((res) => {
				setName(res.data.employname);
				setEmail(res.data.employemail);
				setNumber(res.data.employnumber);
				setRole(res.data.employrole);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="container py-4">
				<h1 className="display-4">Employee Id: {id}</h1>
				<hr />
				<ul className="list-group w-50">
					<li className="list-group-item">Employee Name: {name}</li>
					<li className="list-group-item">Employee Email: {email}</li>
					<li className="list-group-item">Employee Number: {number}</li>
					<li className="list-group-item">Employee Role: {role}</li>
				</ul>
				<Link
					className="btn btn-primary mt-4"
					to="/">
					Back to Home
				</Link>
			</div>
		</>
	);
};

export default View;
