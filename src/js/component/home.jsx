import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
//create your first component
const Home = () => {
	const data = [
		{ title: "Primera Carta",
			url: "https://images.unsplash.com/photo-1718976142386-e9ebe34d3aee?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			texto: "Pork bacon venison, short loin tenderloin ground round jowl. Alcatra jowl t-bone corned beef andouille tail spare ribs ham hock biltong salami pork belly pancetta hamburger pig sausage"
		 },
		{ title: "Segunda Carta",
			url: "https://images.unsplash.com/photo-1720247522784-ba24b938534d?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			texto: " short loin tenderloin ground round jowl. Alcatra jowl t-bone corned beef andouille tail spare  pig sausage"
		 },
		{ title: "Tercera Carta",
			url: "https://images.unsplash.com/photo-1720329461017-d6ed9f66beb5?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			texto: "t-bone corned beef andouille tail spare ribs ham hock biltong salami pork belly pancetta hamburger pig sausage"
		 },
		{ title: "Cuarta Carta",
			url:"https://images.unsplash.com/photo-1719056307923-a11de279d25f?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			texto: "Pork bacon venison, short loin tenderloin ground round jowl. Alcatra jowl"
		 }
	]
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

				<div className="row mt-3 d-flex justify-content-center" style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
					{data.map((value, index, array) => {

						console.log(value.title)
						return(
						<div className="col-12 col-lg-2">
							<Card title={value.title} url={value.url} texto={value.texto}/>
						</div>);

					})}
					

				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
