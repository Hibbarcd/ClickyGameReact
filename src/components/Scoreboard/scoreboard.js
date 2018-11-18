import React from "react";
import "./scoreboard.css";

const ScoreBoard = props => (
    <div className="scoreBoard animated hoverable">
		<h5 className="text-white bold text-center">Score<p></p>{props.score}
		<hr/>Top Score<p></p>{props.topScore}</h5></div>
);

export default ScoreBoard;