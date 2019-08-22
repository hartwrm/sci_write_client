import React, {Component} from 'react';

class WritingPrompt extends Component{
state = {
  prompts: []
}

componentDidMount(){
  this.getPrompts()
}
  getPrompts(){
    fetch('http://localhost:3000/prompts')
    .then(res => res.json())
    .then(json => this.setState({prompts: json}))
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div className="container">
        <h1>Writing Prompts</h1>
          <div className="prompt">
            {
              this.state.prompts.map(prompt =>
              <div key={prompt.id}>
                <h3><a href="http://localhost:3000/prompts/id">{prompt.writing_prompt}</a></h3>
              </div>
              )
            }
          </div>
      </div>
    )
  }
}

export default WritingPrompt
