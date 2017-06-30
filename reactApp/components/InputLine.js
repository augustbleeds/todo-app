import React from 'react'

class InputLine extends React.Component{
  render(){
    return(
      <form className="form-inline">
        <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" placeholder="task"/> <input className="btn btn-primary" type="submit" value="Add todo"/>
      </form>
    )
  }
}

export default InputLine
