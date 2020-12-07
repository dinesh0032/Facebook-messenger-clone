import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input  } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'hi', 'whats up']);
  const [username, setUsername] = useState('');

  //useState = variable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    //const userName = prompt("please enter your name");
    setUsername(prompt('Please enter your name'))
  }, [] ) //condition

  

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    //all the logic t send a message goes
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>facebook-messenger-clone</h1>
      <form>
        <FormControl>
          <InputLabel >Enter Message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} /> 
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>send message</Button>
        </FormControl>
      </form>
      
     {
        messages.map(message => {
          <Message text={message} />
        } )
      }
    </div>
  );
}

export default App;
