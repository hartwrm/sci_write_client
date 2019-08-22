import React, { Component } from 'react';


class MyEditor extends Component {
  render(){
    return(
      <div className="story-form">
        <form action="">
          <label htmlFor="new-story">Add to Story:</label>
          <textarea name="new-story" id="new-story" cols="50" rows="10"></textarea>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default MyEditor;
