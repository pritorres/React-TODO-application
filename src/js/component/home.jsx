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

	const myfunction = (valortarea, i) => {
		return (
			<div key={i} className="inputDiv">
				{valortarea}
				<button
					className="bottonEliminar"
					onClick={() => {
						buttonRemove(i);
					}}>
					X
				</button>
			</div>
		);
	};
	const buttonRemove = i => {
		let newArray = [...tareas];
		newArray.splice(i, 1);
		setTareas(newArray);
	};
	let cantidadTareas = tareas.length;
	const agregarTareas = t => {
		let x = t == 0 ? "No tasks, add a task" : "what to needs to be done?";
		return x;
	};
	return (
		<div className="container col-10">
			<h1>todos</h1>
			<div className="card">
				<input
					placeholder={agregarTareas(cantidadTareas)}
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

				<div>{cantidadTareas} Item left </div>
			</div>
		</div>
	);
};

export default Home;
