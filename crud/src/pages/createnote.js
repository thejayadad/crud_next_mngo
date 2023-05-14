import React, {useState} from 'react'
import Navbar from './components/Navbar'
import axios from "axios"

const createnote = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = () =>{
    const noteObj = {
      title: title,
      content: content
    }
    console.log(noteObj)
    axios.post('api/newNote', noteObj)
    .then(() => {
      alert('Note Added')
    })
  }
  return (
    <div className="max-w-screen-sm m-auto h-screen">
      <Navbar />
      <section className="max-w-full bg-neutral-900 p-4 mt-4 h-full rounded-md">
      <h2 className='text-center'>Create Note</h2>  
      <div className='max-w-lg m-auto'>
        <form onSubmit={handleSubmit} className='p-4 bg-neutral-950 mt-5 mb-4 rounded-md flex-col'>
          <div>
            <input onChange={(event) =>setTitle(event.target.value)} className='bg-neutral-900 p-4 w-full' type='text' id="title" placeholder='Title' />
          </div>
          <div>
          <textarea onChange={(event) =>setContent(event.target.value)} className='bg-neutral-900 p-4 w-full mt-3' type='text' id="content" placeholder='Content' ></textarea>
          </div>
          <button type='submit' className='p-2 bg-amber-600 w-32 text-center rounded-md mt-2'>Submit</button>
        </form>
      </div>      
      </section>


    </div>
  )
}

export default createnote