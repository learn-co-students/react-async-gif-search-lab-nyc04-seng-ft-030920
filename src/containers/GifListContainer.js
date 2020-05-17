import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifList: [],
    }

    handleGifFetch = (searchTerm) => {
        let newGifArray = []
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(r => r.json())
            .then(response => {
                response.data.map(gif => newGifArray.push(gif.images.original.url))
                this.setState({gifList: newGifArray})
            })
    }



    render() {
        return (
            <div>
                <GifSearch 
                    handleGifFetch={this.handleGifFetch}
                />
                <GifList gifList={this.state.gifList}/>
            </div>
        )
    }
}
