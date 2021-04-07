import React from 'react';


class UserCard extends React.Component {
    componentDidMount() {
        console.log(`userCard ${this.props.userCard.name} has mounted` );
    }
}


class Poki extends React.Component {
    componentDidMount() {
      // console.log(`Poki ${this.props.pokemon.name} has mounted` );
    }

    render() {
        const { pokemon } = this.props;
        // console.log(`Poki ${this.props.pokemon.name} renders DOM.` );

        return(
        <div className="pokemon">
          <img src={pokemon.img} alt={pokemon.name} />
          <div>
            <h3>{pokemon.name}</h3>
            {pokemon.next_evolution &&
              pokemon.next_evolution.map(e => <p key={e.num}>{e.name}</p>)}
          </div>
        </div>);
    }
}

export default Poki;