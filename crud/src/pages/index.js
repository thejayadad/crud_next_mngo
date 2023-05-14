
import Link from "next/link"
import Navbar from "./components/Navbar"
import React, {useState} from "react"
import axios from "axios"

export async function getStaticProps(){
  const mongoose = require("mongoose")
  const Note = require("../../model/Note.js")

  await mongoose.connect('mongodb://127.0.0.1:27017/nextJSCRUD', {
    useNewUrlParser: true,
  }).then(() => console.log("DB CONNECTED"))

  const notes = await Note.find().sort({createdAt: 'desc'})
  console.log(notes)
  return {
    props: {
      notes: JSON.parse(JSON.stringify(notes))
    }
  }
}

export default function Home({notes}) {
  const [visibility, setVisibility] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [noteId, setNoteId] = useState('')

  const editForm = (title, content, noteId) => {
    setVisibility(visibility => !visibility)
    setTitle(title)
    setContent(content)
    setNoteId(noteId)
  }
  const updateNote = async (noteId) => {
    const noteObj ={
      title: title,
      content: content
    }
    console.log(noteObj)
    await axios.put(`/api/updateNote?id=${noteId}`, noteObj)
      .then(() => {
        window.location.reload(false)
      })
  }
  const deleteNote = (noteId) => {
    axios.delete(`/api/deleteNote?id=${noteId}`).then(() => {
      window.location.reload(false)
    })
  }

  return (
    <main className="max-w-screen-sm m-auto h-screen"
    >
   <Navbar />
   <section className="max-w-full bg-neutral-900 p-4 mt-4 h-full rounded-md">
    <ul className="max-w-lg m-auto">
      {notes.map((note, i) => {
        return (
          <li className="p-4 bg-neutral-950 mt-5 mb-4 rounded-md" key={i}>
          <p>{note.title}</p>
          <h5>{note.content}</h5>
          <button onClick={(title, content, noteId)=>editForm(note.title, note.content, note._id)} className="mr-3 bg-lime-700 mt-2 p-2 rounded-md">Edit</button>
          <button onClick={() => deleteNote(note._id)} className="mr-3 bg-rose-600 mt-2 p-2 rounded-md">Delete</button>
          {visibility && <div>
            <h2 className="text-center">Update Note</h2>
            <form className="p-4 bg-neutral-950 mt-1 mb-4 rounded-md flex-col">
              <div>
                <input className="bg-neutral-900 p-4 w-full" type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)}  />
              </div>
              <div>
                <textarea onChange={(event) => setContent(event.target.value)} className="bg-neutral-900 p-4 w-full mt-3" type="text" id="content" value={content}  ></textarea>
              </div>
              <button type="submit" onClick={() => updateNote(noteId)} className="mr-3 bg-lime-700 mt-2 p-2 rounded-md">Update</button>
              <button onClick={() => setVisibility(visibility => !visibility)} className="mr-3 bg-rose-600 mt-2 p-2 rounded-md">Cancel</button>
            </form>
          </div>

          }        
        </li>         
        )
        
      })

      }         

    </ul>
   </section>
    </main>
  )
}
