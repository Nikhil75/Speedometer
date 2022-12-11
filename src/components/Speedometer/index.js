import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-container">
        <div className="speedometer-text">
          <h1 className="text">SPEEDOMETER</h1>
        </div>
        <div className="speedometer-image">
          <img
            className="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <div className="speedometer-speed">
          <h1 className="speed">Speed is {count}mph</h1>
        </div>
        <div className="speedometer-rules-text">
          <p className="rules">Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div className="buttons-container">
          <button className="Accelarate" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="ApplyBrake" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
