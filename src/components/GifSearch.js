import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        query: ''
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.query} onChange={this.handleChange}/> 
                </form>
            </div>
        )
    }
}

export default GifSearch