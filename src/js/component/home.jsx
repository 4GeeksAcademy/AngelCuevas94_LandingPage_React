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
		<div>
			<Navbar />
			<div className="row">
				<div class="col-lg-1">
				</div>
				<div className="container col-lg-8 d-flex justify-content-center">
					<Jumbotron />
				</div>
				<div class="col-lg-1">
				</div>
			</div>
			<div className="container">

				<div className="row mt-3 d-flex justify-content-center"style={{marginLeft:"-1.5rem", marginRight:"-1.5rem"}}>
					
					<div className="col-12 col-lg-2">
						<Card />
					</div>
					<div className="col-12 col-lg-2">
						<Card />
					</div>
					<div className="col-12 col-lg-2">
						<Card />
					</div>
					<div className="col-12 col-lg-2">
						<Card />
					</div>
					
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
