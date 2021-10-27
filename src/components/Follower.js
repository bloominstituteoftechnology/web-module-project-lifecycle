import React from 'react';

class Follower extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: ''
        };
   
    }


    render() {
        return (
          <div>
              <div className='followers-section' key={this.props.item.id} >
              <h1>Followers </h1>
               {this.props.followers.map((item) => {	           
                return <img src={this.props.item.avatar_url} width='20px'alt={this.props.item.login}/>
            })
        }
               </div>          
                   
                    
                    
                 
           
              </div>
                  
         )

        };
    
}

export default Follower; 