import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <button type="button">delete</button>
        <h3>First card</h3>
        <p>lorem ipsum</p>
      </div>
    )
  }
}

export default Card;