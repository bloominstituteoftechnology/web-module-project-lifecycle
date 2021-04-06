import React from 'react';
import Usercard from './Usercard'

class UsercardList extends React.Component {
    componentDidMount() {
        console.log('UsercardList mount successful')
    }

    render() {
        return(
            <div>
                <h2>Usercard List</h2>
                <Usercard />
            </div>
        )
    }
}


export default UsercardList;