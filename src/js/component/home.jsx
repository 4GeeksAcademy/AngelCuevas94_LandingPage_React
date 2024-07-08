import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<Card/>
			<Card/>
			<Card/>
			<Footer/>
		</div>
		
	);
};

export default Home;
