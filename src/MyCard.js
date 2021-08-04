import React from 'react'
import CardInfo from './CardInfo'

class MyCard extends React.Component {
    render() {
        return (
            <div
                className='container'
                style={{
                display:'flex',
                justifyContent:'center'
            }}>
                <div 
                    className='card'
                    style={{
                    border:'solid black 1px',
                    width:'500px',
                    height:'300px',
                    display:'flex',
                    flexDirection:'column',
                }}>
                    <div 
                    className='header'
                    style={{
                    margin:'10px 10px 5px 10px',
                    }}>
                        <h1>{this.props.cardData.login}</h1>
                    </div>
                    <CardInfo cardData={this.props.cardData}/>
                </div>
            </div>
        )
    }
}

export default MyCard