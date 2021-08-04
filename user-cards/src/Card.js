import React from 'react';

export default class Card extends React.Component {

    render() {
        console.log('card rendered');
        return (
            <div key={this.props.cards.id} className="pokemon">
                <img src={this.props.cards.avatar_url} alt={this.props.cards.login} />
                <div>
                    {this.props.cards.login}
                </div>
                <div>
                    {this.props.cards.url}
                </div>
            </div>);
    }
}
