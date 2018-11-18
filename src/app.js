import React, { Component } from "react";
import Wrapper from "./components/Wrapper/wrapper";
import Navbar from "./components/Navbar/navbar";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import ScoreBoard from "./components/Scoreboard/scoreboard";

class App extends Component {

	state = {
		guessArray: [],
		score: 0,
		topScore: 0,
	};

	clickCard = card => {
		let guessArray = this.state.guessArray;
		let score = this.state.score;
		if (guessArray[card.id]) {
			this.setState({
				message: "Better luck next time",
				topScore: Math.max(this.state.score, this.state.topScore),
				guessArray: [],
				score: 0,
			})
		}
		else {
			guessArray[card.id] = true;
			this.setState({
				guessArray: guessArray,
				score: ++score,
			}, () => {
				if (this.state.score === 12) {
					this.setState({
						message: "You Won a hard fought victory!",
						topScore: Math.max(this.state.score, this.state.topScore),
						guessArray: [],
						score: 0,
					})
				}
			})
		}
	}
	render() {
		return (
			<div>
				<Navbar message={this.state.message} />
				<ScoreBoard
					score={this.state.score}
					topScore={this.state.topScore} />
					<Wrapper>
						{characters
							.sort((a, b) => 0.5 - Math.random())
							.map(randomCard => (
							<CharacterCard
								clickCard={this.clickCard}
								id={randomCard.id}
								key={randomCard.id}
								image={randomCard.image} />))}
					</Wrapper>
			</div>
		);
	}
}

export default App;