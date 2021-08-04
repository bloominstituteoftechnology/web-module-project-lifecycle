import React from 'react'

class CardInfo extends React.Component{
    render(){
        return (
            <div
                className='body'
                style={{
                fontSize:'20px',
                margin:'5px 10px 10px 10px',
            }}>
                <p>Name: {this.props.cardData.name}</p>
                <p>Location: {this.props.cardData.location}</p>
                <p>{this.props.cardData.bio}</p>
                <p>Repos to their name: {this.props.cardData.public_repos}</p>
            </div>
        )
    }
}

export default CardInfo