import React, { Component } from 'react';

class GifList extends Component {
    render(){
        return(
            <div className='gif-list'>
                {this.props.gifs.map((gif, index) => <img src={gif} key={index} alt="gif"/>)}
            </div>
        )
    }
}

export default GifList