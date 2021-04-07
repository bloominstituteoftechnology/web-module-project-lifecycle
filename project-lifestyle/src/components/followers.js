
import React from 'react';

export default class followers extends React.Component{
    render (){
        const {followers} = this.props;
            return (
                <div>
                    {followers.map((myUser) => {
                        return (
                            <img src = {myUser.avatar_url}/>
                        )
                    })}
                </div>
            )
    }
}