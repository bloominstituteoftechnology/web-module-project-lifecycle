import React from 'react'
import FollowingData from './FollowingData'
import axios from 'axios'

class Following extends React.Component {
    constructor() {
        super();
        this.state = {
            following: [],
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/OwenDamron/following")
        .then(res => this.setState({
            ...this.state,
            following: res.data
        }))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                {
                    this.state.following.map(data => {
                        return <FollowingData key={data.id} following={data}/>
                    })
                }
            </div>
        )
    }
}

export default Following;