import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Input from "./Components/Input";
import Update from "./Components/Update";
import View from "./Components/View";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/employee/add"
						element={<Input />}
					/>
					<Route
						path="/employee/update/:id"
						element={<Update />}
					/>
					<Route
						path="/employee/view/:id"
						element={<View />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
