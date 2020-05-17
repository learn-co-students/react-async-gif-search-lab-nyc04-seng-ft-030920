import React from 'react'

function GifList(props){
  let gifArray = props.gifList.map(url => <li key={url}><img src={url} alt="Your Gif Search!"/></li>)
  return (
    <div className='container-fluid'>
        <ul>
            {gifArray}
        </ul>
    </div>
  )
}

export default GifList