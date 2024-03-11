import React, { Component } from 'react';

interface CounterState {
  count: number;
}

export default class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  }

  handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <div>
          <h2 className="counter">{count}</h2>
          <button
            className="counter-button"
            onClick={this.handleIncrement}>
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
