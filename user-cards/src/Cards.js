import React from 'react';
import Card from './Card.js'

export default class Cards extends React.Component {

    render() {
        console.log(`Cardssss renderes`);
        return (
            <>
                {this.props.persons.map(user => (
                    <Card key={user.id} cards={user} />
                ))}
            </>
        );
    }
}