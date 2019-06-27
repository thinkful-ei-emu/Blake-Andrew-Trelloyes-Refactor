import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {
handleDeleteClick = () => {
  this.props.deleteById(this.props.cardId, this.props.listId);
  //console.log(`id : ${this.props.cardId}, listId : ${this.props.listId}`);
}

  render() {
    return (
      <div className="Card">
        <button onClick={()=>{this.handleDeleteClick()}} type="button">delete</button>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Card;