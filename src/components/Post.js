import React from 'react'

const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`

export default function Post({url, description, likes}) {
    return (
      <div className='Post'>
        <img className='Post_Image' src={formatImageUrl(url)} alt='post'/>
        <h2>{description}</h2>
        <span>Likes - {likes}</span>
      </div>
    )
}

