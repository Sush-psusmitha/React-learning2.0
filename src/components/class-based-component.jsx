import { Component } from "react";


class ClassBasedComponent extends Component{
  
  state = {
    showText: false,
  }

  handleClick = () =>{
    console.log("button CLicked!")

    this.setState({
      showText : !this.state.showText
    })

  }
    render(){
      console.log(this.state.showText)
        return <>
        
          <div>
            {
              this.state.showText ?  <h5>This is class based components</h5> : null
            }
           
            <button onClick={this.handleClick}>Toggle</button>
          </div>
        
        </>
    }
}
export default ClassBasedComponent