import React from 'react' 
import { Card, CardBody, CardImg, Button, CardTitle, CardSubTitle } from 'reactstrap'

function FollowerCard(props) {
    <div className='followerDiv'>
        {props.followers.map((follower) => {
    return(
        <Card className='follower' key={follower.id}>
            <CardImg src={follower.avatar-url} alt='Profile Pic'/>
            <CardBody>
                <CardTitle>{follower.login}</CardTitle>
                <CardSubtitle>{follower.name}</CardSubtitle>
            </CardBody>
            <Button>See Profile</Button>
        </Card>
    )
        })}
    </div>
}

export default FollowerCard;