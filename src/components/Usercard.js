import React from 'react';
import styled from 'styled-components';

const UserAvatar = styled.img`
    width: 80%;
    height: 80%;
`;

const InformationWrapper = styled.div`

`;

const Container = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    border: 3px solid white;
    width: 25%;
    padding: 0.5%;
    background-image: url('https://www.pngkey.com/png/full/479-4795589_lavender-gradient-purple-gradient-transparent-background.png');
    color: white;
    border-radius: 8px;
    font-weight: bold;
    font-size: 90%;
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

                <InformationWrapper>
                    <div>{this.props.login === '' ? '' : `login: ${this.props.login}`}</div>
                    <div>{this.props.id === null ? '' : `ID: ${this.props.id}`}</div>
                    <div>{this.props.url === '' ? '' : `Github URL: ${this.props.url}`}</div>
                    <div>{this.props.followers === '' ? '' : `Follower URL: ${this.props.followers}`}</div>
                    <div>{this.props.followerCount === null ? '' : `Follower Count: ${this.props.followerCount}`}</div>
                </InformationWrapper>
            </Container>
        )
    }
}

export default UserCard;