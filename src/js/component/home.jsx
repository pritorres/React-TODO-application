import React, { useState } from "react";

//create your first component
const Home = () => {
	const [valorInput, setValorInput] = useState("");
	const [tareas, setTareas] = useState([]);
	const myInput = e => {
		setValorInput(e.target.value);
	};
	const pessEnter = e => {
		if (e.key === "Enter") {
			setTareas([...tareas, valorInput]);
			setValorInput("");
		}
	};
	const myfunction = valortarea => {
		return (
			<div className="inputDiv">
				{valortarea}
				<button>X</button>
			</div>
		);
	};
	return (
		<div className="container col-10">
			<h1>todos</h1>
			<div className="card">
				<input
					placeholder="No tasks, add a task"
					value={valorInput}
					type="text"
					onChange={e => {
						myInput(e);
					}}
					onKeyPress={e => {
						pessEnter(e);
					}}
				/>
				{tareas.map(myfunction)}
			</div>
		</div>
	);
};

export default Home;
