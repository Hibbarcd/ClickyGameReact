import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
	<div onClick={() => props.clickCard(props)} className="card col-sm-3 p-3 m-4  animated bounceIn hoverable">
		<img className="card-img-top" src={props.image} alt={props.name} />
	</div>
);

export default CharacterCard;