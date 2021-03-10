import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class Friend extends React.Component {

    render(){
        const {friend} = this.props;
        console.log(friend, 'friend')

        return(
            <div key={friend.id} className='friend'>
                <Card>
                    <CardImg top width="100%" src={friend.avatar_url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">User: {friend?.login}</CardTitle>
                        <CardText>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                {/* <img src={friend.avatar_url} width='150' />
                <h5>User: {friend?.login}</h5>
                <p></p> */}

            </div>
        )
    }
}

export default Friend