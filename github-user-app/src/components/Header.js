import React from 'react'

class Header extends React.Component {
    render () {
        return (
            <div className='header-container'>
                <h1 className='app-title'>Github User Search App</h1>
                <div className='reset'>
                    <button className='search-btn' onClick={this.props.resetHandler}>
                        Find New User
                    </button>
                </div>
            </div>
        );
    };
};

export default Header;