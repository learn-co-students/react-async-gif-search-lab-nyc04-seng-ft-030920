import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        gifSearch: ''
    }

    handleInput = (evt) => {
        let {name, value} = evt.target
        this.setState({[name]: value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        let {value} = evt.target.gifSearch
        this.props.handleGifFetch(value.trim())
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a Search Term:</label>
                    <br></br>
                    <input 
                        type="text"
                        name="gifSearch"
                        value={this.state.gifSearch}
                        onChange={this.handleInput}
                    >
                    </input>
                    <br></br>
                    <button type="submit">Find Cool Gifs!</button>
                </form>
            </div>
        )
    }
}
