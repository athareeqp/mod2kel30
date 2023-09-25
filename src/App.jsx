/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react'
import './App.css';
import ReactJSX, { ReactNoJSX } from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
import Button from './elements/Button';
import TextInput from './elements/TextInput';

function App() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    setSubmittedText(text);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <ReactNoJSX />
        <div className="Components">
          <CompAndProps/>
        </div>
          <form action="" onSubmit={handleSubmit}>
            <TextInput border="red" placeholder="Input" value={text} onChange={handleTextChange} />
            <Button background="blue" type='submit'>Output</Button>
        </form>
        {submittedText && (
          <div>
            <p>~{submittedText}~</p>
          </div>
        )}
      </header>
    </div>
  );
}
export default App;
