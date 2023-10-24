import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
export function Home() {
	const [selectdColor, setSelectedColor] = useState("green");
	return (

		<div className="semasforo position-absolute top-50 start-50 translate-middle">
			<div onClick={() => setSelectedColor("red")} className={"light red " + ((selectdColor === "red") ? "glow" : "")}></div>
			<div onClickCapture={() => setSelectedColor("yellow")} className={"light yellow " + ((selectdColor === "yellow") ? "glow" : "")}></div>
			<div onClickCapture={() => setSelectedColor("green")} className={"light green " + ((selectdColor === "green") ? "glow" : "")}></div>

		</div>

	);
};

export default Home;
