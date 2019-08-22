import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import {Editor, EditorState} from 'draft-js';
import WritingPrompt from './components/WritingPrompt'
import MyEditor from './components/MyEditor'
import './App.css'

class App extends Component{

  render(){
    return(
      <div className="App">
        <WritingPrompt />
        <MyEditor />
      </div>
    )
  }
}

export default App;
