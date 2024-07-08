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
			<div className="container">
				<Jumbotron />
			</div>
			<div className="container col-lg-11 d-flex justify-content-center mt-3" >
				<Card/>
				<Card/>
				<Card/>
			</div>
			
			<Footer/>
		</div>
		
	);
};

export default Home;
