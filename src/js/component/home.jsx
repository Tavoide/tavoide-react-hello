import React from "react";


//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Cards from "./Cards";
import Footer from "./Footer"

const cards = [
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	},
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 2",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	},
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 3",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	},
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 4",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	}
];

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) =>
						<div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
							<Cards cards={item} />
						</div>
					)
					}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
