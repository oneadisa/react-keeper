import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // const [title, setTitle] = useState({
  //   title: "",
  //   content: ""
  // });

  // const [items, setItems] = useState([]);
  // const[content, setcontent] =  useState("");

  // function handleTitle(event) {
  //   const newTitle = event.target.value;
  //   setTitle(() => {
  //     return {
  //       [title]: newTitle,
  //     };
  //   });
  // }

  // function handleContent(event) {
  //   const newContent = event.target.value;
  //   setTitle((prevItems) => {
  //     return {
  //       ...prevItems,
  //       content: newContent
  //     };
  //   });
  // }

  // function handleChange(event){
  // const{name,value } = event.target;
  // setTitle((prevValue)=>{
  //   return({
  //     ...prevValue,
  //     [name]:value
  //   })
  // })
  // }

  //   function addItem(event) {
  // event.preventDefault();
  //     setItems((prevItems) => {
  //       return [...prevItems, title];
  //     });
  //     setTitle("");
  //   }
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
        // changeTitle={handleChange}
        // changeContent={handleChange}
        // add={addItem}
        // noteTitle = {title.title}
        // noteContent={title.content}
      />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* // <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
