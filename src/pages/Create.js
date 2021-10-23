import React, {useState} from "react";

const Create = () => {
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  console.log(file);

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('data', JSON.stringify({description}))
    formData.append('files.image', file)

    const response = await fetch('http://localhost:1337/posts', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    console.log("data ===>", data);
  }
    return (
    <div className="Create">
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="file"
          placeholder="Add a file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <button>Submit</button>
      </form>
    </div> 
  )
}

export default Create