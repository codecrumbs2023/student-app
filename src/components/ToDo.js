import React, { useState } from 'react';

const ToDo = () => {
  const [inputText, setInputText] = useState('');
  const [enteredTexts, setEnteredTexts] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    setEnteredTexts((prevTexts) => [...prevTexts, inputText]);
    setInputText('');
  };

  const handleUpdateTask = (index) => {
    const updatedText = prompt('Update the task:', enteredTexts[index]);
    if (updatedText !== null) {
      const updatedTasks = [...enteredTexts];
      updatedTasks[index] = updatedText;
      setEnteredTexts(updatedTasks);
    }
  };

  const handleDeleteTask = (index) => {
    const shouldDecreaseCount = window.confirm('Do you want to delete this task?');
    if (shouldDecreaseCount) {
      setClickCount(clickCount - 1);
    }
    const updatedTasks = enteredTexts.filter((_, i) => i !== index);
    setEnteredTexts(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <label>
        Enter Text:
        <input type="text" value={inputText} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleButtonClick}>Add Task</button>
      <p>Clicked {clickCount} times</p>
      <ul>
        {enteredTexts.map((text, index) => (
          <li key={index}>
            {text}
            <button onClick={() => handleUpdateTask(index)}>Update</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
