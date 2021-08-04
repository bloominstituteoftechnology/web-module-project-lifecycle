import React from 'react'
import styled from 'styled-components'

const StyledMainCard = styled.div`
border: .5rem inset hotpink;
background-color: paleturquoise;
img{
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
}`

class GithubCard extends React.Component {
    render() {
        const { user } = this.props
        return (
            <StyledMainCard>
                <h1><a href={user.html_url}>{user.name}'s GitHub</a></h1>
                <img alt={user.name} src={user.avatar_url} />
                <section>
                    <p>Username: {user.login}</p>
                    <p>About: {user.bio}</p>
                    <p>Location: {user.location}</p>
                    <p>Followers: {user.followers} * <span>Following: {user.following}</span></p>
                </section>
            </StyledMainCard>
        )
    }
}

export default GithubCard