import React from 'react';

class NewUser extends React.Component {
    constructor(){
        super();

        this.state = {

        }
    }



    render(){
        return (
            <div>
                <label /> Enter A Github User!
                <input type="text" name="newuser" id="newuser" />
            </div>
        )
    }
}

export default NewUser;