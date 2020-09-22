import React from 'react';

export default class ClickMeButton extends React.Component {
  state = {
    counter: 0
  }

// reschedule
// wed at 12
handleClick = () => {
  console.log('click', this.state.counter)
  this.setState (prevState => ({
    counter: prevState.counter + 1
    })
  )
}
  render (counter) {

    return (
      
      <div className="card">
        <button className="clickMeButton" onClick={this.handleClick}> {/* event listener now called synthetic event*/}
          Button
        </button>
        <p>{this.state.counter}</p>
      </div>

    )
  }

};

