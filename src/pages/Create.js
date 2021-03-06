import React, {useState} from "react";

const Create = () => {
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(!description) {
      setError('Please add a description')
      return
    }

    if(!file) {
      setError('Please add a File')
      return
    }

    const formData = new FormData()
    formData.append('data', JSON.stringify({description}))
    formData.append('files.image', file)

    try {
      const response = await fetch('http://localhost:1337/posts', {
        method: 'POST',
        body: formData
    })
    
    const data = await response.json()
    console.log("data ===>", data) 
    } catch(err) {
      console.log("Exception", err)
      setError(err)
    }
  }

    return (
    <div className="Create">
      <h2>Create</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setError('')
            setDescription(event.target.value)
          }}
        />
        <input
          type="file"
          placeholder="Add a file"
          onChange={(event) => {
            setError('')
            setFile(event.target.files[0])
          }}
        />
        <button>Submit</button>
      </form>
    </div> 
  )
}

export default Create