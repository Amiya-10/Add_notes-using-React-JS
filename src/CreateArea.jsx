import React, { useCallback, useState } from 'react';

function CreateArea(props) {
  const [newNote, setNote] = useState({
    title: '',
    content: '',
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleClick(event) {
    props.onAdd(newNote);
    setNote({ title: '', content: '' });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
