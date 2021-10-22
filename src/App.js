import React, {useState, useEffect} from 'react';
import './App.css';

import Post from './components/Post';

const mockPosts = [
  {
    id: 1,
    likes: 20,
    description: "Description",
    image: {
      url: "/uploads/186px_Vsevolod_III_the_Big_Nest_ae761d1dba.jpg"
    }
  },
  {
    id: 2,
    likes: 25,
    description: "Description",
    image: {
      url: "/uploads/slide_2_e088c2ad26.jpeg"
    }
  }
]

function App() {
  const [posts, setPosts] = useState([])
  console.log(posts);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/posts')
      const data = await response.json()
      setPosts(data)
    }
    getPosts()
  }, [])
  
  return (
    <div className="App">
      <div>
      {posts.map(post => (
        <div>
        <Post 
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
          key={post.id}
        />
        </div>
      ))}
      
      </div>
    </div>
  );
}

export default App;
