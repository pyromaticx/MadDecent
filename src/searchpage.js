import React, { Component } from 'react'

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }
    handleSearchChange(evt) {
        this.setState({
            searchValue: evt.target.value
        });
    }
    render() {
        return (
            <div className='page-content'>
                <h3>Search for media on the exchange</h3>
                <div className='search-box'>
                    <input value={this.state.searchValue} onChange={(evt) => {this.handleSearchChange(evt)}} />
                    <button type='button' className='btn'>Search</button>
                </div>
            </div>    
        );
    }
}