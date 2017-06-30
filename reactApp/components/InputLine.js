import React from 'react'

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      typedText: ""
    }
  }
  handleTyping(event){
    this.setState({
      typedText: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ''
    });
  }
  render(){
    return(
      <form className="form-inline">
        <input value={this.state.typedText} className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" placeholder="task" onChange={(event)=>(this.handleTyping(event))} /> <input className="btn btn-primary" type="submit" value="Add todo" onClick={(event) => this.handleSubmit(event)}/>
      </form>
    )
  }
}

export default InputLine
