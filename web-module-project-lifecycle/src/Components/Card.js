import React from 'react';

class Card extends React.Component {
render () {
        const { data } = this.props;
        return (
          <div className="card-container">
            <h2>Name:{data.name}</h2>
            <h3>Location: {data.location}</h3>
            <p>Bio:{data.bio}</p>
            <p>URL:{data.url}</p>
          </div>
        );
    }
}

export default Card;