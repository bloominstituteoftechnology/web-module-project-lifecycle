import React from "react";
import Card from "./Card"
import Follower from "./Follower"

class CardList extends React.Component {
  componentDidMount() {
    console.log("Component has mounted");
  }

  render() {
    console.log("renders");
    return (
      <>
        <Card data={this.props.data} key={this.props.data.id}/>
        {
            this.props.followers.map((follower) => {
              return <Follower follower={follower} />;
            })
        }

      </>
    );
  }
}

export default CardList;