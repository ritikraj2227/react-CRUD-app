import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		employ();
	}, []);

	const employ = async () => {
		await axios.get("http://localhost:5000/employs").then((res) => {
			setData(res.data);
		});
	};

	const handledelete = async (id) => {
		await axios.delete(`http://localhost:5000/employs/${id}`).catch((err) => {
			console.log(err.response.data);
		});
		employ();
	};

	return (
		<>
			<div className="container">
				<table className="table mt-4 table-bordered shadow">
					<thead className="table-primary">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Employee Name</th>
							<th scope="col">Employee Email</th>
							<th scope="col">Employee Role</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((employ, index) => (
							<tr key={employ.id}>
								<th scope="row">{index + 1}</th>
								<td>{employ.employname}</td>
								<td>{employ.employemail}</td>
								<td>{employ.employrole}</td>
								<td>
									<Link
										to={`/employee/view/${employ.id}`}
										className="btn btn-primary me-2">
										<i className="fas fa-eye"></i>
									</Link>
									<Link
										to={`/employee/update/${employ.id}`}
										className="btn btn-primary me-2">
										<i className="fas fa-edit"></i>
									</Link>
									<Link
										className="btn btn-danger "
										onClick={() => handledelete(employ.id)}>
										<i className="fas fa-trash"></i>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
					<caption>List of Employees</caption>
				</table>
			</div>
		</>
	);
};

export default Home;
