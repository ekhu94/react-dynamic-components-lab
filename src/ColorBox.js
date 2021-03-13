import React, { Component } from 'react';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: [
      
    ]
  }

  render() {
    const {opacity} = this.props;
    return (
      <div className="color-box" style={{opacity}}>
        {opacity >= 0.2 ? <ColorBox opacity={opacity - 0.1} /> : null }
      </div>
    )
  }

}

