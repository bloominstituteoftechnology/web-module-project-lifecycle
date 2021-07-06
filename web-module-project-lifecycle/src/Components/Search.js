import React from "react";

// - Build a form that allows you to search for different Github users. When the form is submitted, use `componentDidUpdate` to fetch the data for the user you typed in. Set that new user's data to state to trigger the component to rerender and display your new user. Don't forget to fetch their followers as well.

class SearchForm extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [],
            followers: [],
            user: "", 
        }
    }


    render() {
        return (
            <div>
                <p>Hello</p>
                <form>
                    <input 
                        type="search"
                        placeholder="Search for user" 
                    />
                </form>
            </div>
        )
    }
}

export default SearchForm;