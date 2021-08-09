import React from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import '../components/CardMaker.css'

const CardMaker = props => {
	console.log(props)
	return (
		<div className="mainCard">
			<Card>
				<CardImg src={props.data.avatar_url} alt="profile" />
				<CardBody>
					<CardTitle tag="h4">{props.data.name}</CardTitle>
					<CardSubtitle>{props.data.bio}</CardSubtitle>
				</CardBody>
			</Card>
		</div>
	)
}

export default CardMaker