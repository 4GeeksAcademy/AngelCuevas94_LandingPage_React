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
			<div className="container col-lg-10">
				<div className="container">
					<Jumbotron />
				</div>
				<div className="container d-flex justify-content-center mt-3 col-lg-10" >
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<div>
			<Footer/>
			</div>
		</div>
		
	);
};

export default Home;
