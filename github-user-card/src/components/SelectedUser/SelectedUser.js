import React, { Component } from 'react';
import User from '../User/User';

class SelectedUser extends Component {
  state = {};
  render() {
    return (
      <div>
        <User user={this.props.user} />
        {this.props.followers && this.props.followers.length > 0 && (
          <div className='vertical-line'></div>
        )}
      </div>
    );
  }
}

export default SelectedUser;
