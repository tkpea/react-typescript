import * as React from 'react'
import { render } from 'react-dom'

interface Props {}
interface State {
  message: string;
}

export default class App extends React.Component<Props, State> {

  public state: State  = {
    message: "something"
  }

  public onChange = (e:any) =>{
     this.setState( {message: e.target.value} )
  }

  render() {
    return (
      <div>
        <input type="text" onChange = { this.onChange.bind(this) } />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))