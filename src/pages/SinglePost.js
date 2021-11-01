import React, { useState, useEffect } from "react";
import Post from '../components/Post'

export default function SinglePost({match, history}) {

    const { id } = match.params
    console.log("id", id)

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    const handleDelete = async () => {
      const response = await fetch(`http://localhost:1337/posts/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      history.push('/')
    }

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:1337/posts/${id}`)
            const data = await response.json()

            console.log("data", data)
            setPost(data)
            setLoading(false)
        }

        fetchPost()
    }, [])
console.log(post.id);
    return (
        <div>
            {loading && 
              <span>Loading ...</span>
            }
            {!loading &&
              <>
                {post.id && 
                  <>
                  <Post
                    description={post.description}
                    url={post.image && post.image.url}
                    likes={post.likes}
                  />
                  <button onClick={handleDelete}>Delete Post</button>
                  </>
                }
                {!post.id && 
                  <span>Not Found</span>
                }
              </>
            }         
        </div>
    )
}