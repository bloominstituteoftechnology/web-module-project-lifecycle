import React from 'react'

class Card extends React.Component{

    render(){
        console.log(this.props.avatar)
        return(
        <div>
            <h1>{this.props.login}</h1>
            <img src ={this.props.avatar_url}/>
            <h2>{this.props.url}</h2>
            <h2>Followers {this.props.followers}</h2>
        </div>
        )
    }
}
export default Card