import React from 'react';

class User extends React.Component
{
    componentDidMount(props) 
    {

    };

    render()
    {
        return (
            <div class="card">
                <img src="#" alt="#" />
                <div class='card-info'>
                    <h3 class="name">Name</h3>
                    <p>Location: </p>
                    <p>Profile: 
                        <a href="#">Address</a>                        
                    </p>
                    <p>Followers: </p>
                    <p>Following: </p>
                    <p>Bio: </p>
                </div>
            </div>
        );
    }
}

export default User;