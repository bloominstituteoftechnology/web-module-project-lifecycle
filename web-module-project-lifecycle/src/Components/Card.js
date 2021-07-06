import React from 'react';

class Card extends React.Component {
render () {
        const { data } = this.props;
        return (
          <div className="card-container">
            <h2>{data.name}</h2>
            <h3>{data.location}</h3>
            <p>{data.bio}</p>
            <p>{data.url}</p>
          </div>
        );
    }
}

export default Card;