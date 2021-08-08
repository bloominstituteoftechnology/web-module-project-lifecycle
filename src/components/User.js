import React from 'react';
import styled from 'styled-components';

const UserAvatar = styled.img`
    width: 70%;
    height: 70%;
`;

const Info = styled.div`
`;

const Container = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    border: 3px solid white;
    width: 45%;
    padding: 1.4%;
    background: black;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    line-height: 2rem
`;

const ThumbnailContainer = styled.div`
`;

class UserCard extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        console.log("Component mounted");
          }

    render(){
        return (
            <Container>
                <ThumbnailContainer>
                    <p>{this.props.name}</p>
                    <UserAvatar src={this.props.avatar} />
                </ThumbnailContainer>

                <Info>
                    <div>{this.props.login === '' ? '' : `login: ${this.props.login}`}</div>
                    <div>{this.props.id === null ? '' : `ID: ${this.props.id}`}</div>
                    <div>{this.props.url === '' ? '' : `Github URL: ${this.props.url}`}</div>
                    <div>{this.props.followers === '' ? '' : `Follower URL: ${this.props.followers}`}</div>
                    <div>{this.props.followerCount === null ? '' : `Follower Count: ${this.props.followerCount}`}</div>
                </Info>
            </Container>
        )
    }
}

export default UserCard;