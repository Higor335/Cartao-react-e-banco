import cx from 'classnames';
import { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  }
  handleIncrement = e => {
    e.preventDefault();
    this.setState(prev => ({ count: prev.count + 1 }))
  }
  render() {
    const counter = this.state.count
    return (
      <>
        <div>
          <h2 className="counter">{counter}</h2>
          <button
            className="counter-button"
            onClick={(e) => this.handleIncrement(e)}>
            Click
          </button>
        </div>
        <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
      </>
    );
  }
}
