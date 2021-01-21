import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainers extends Component {

    state = {
        gifs: []
    }

    fetchGIFs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then(({data}) => {
            return this.setState({gifs: data.map(d => d.images.original.url)})
        })
    }

    render(){
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchGIFs("dolphin")
    }
}

export default GifListContainers