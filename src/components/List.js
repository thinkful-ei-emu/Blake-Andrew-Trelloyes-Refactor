import React from 'react';
import '../styles/List.css';

import Card from './Card';


class List extends React.Component {

  addRandomCard = () => {
    this.props.addRandomCard(this.props.listId);
  }

  render() {
    const cards = this.props.cards.map((card,index) => {
      return <Card
        key={index}
        cardId={card.id}
        title={card.title}
        content={card.content}
        listId={this.props.listId}
        deleteById={this.props.deleteById}
      />
    });
    
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <button onClick={this.addRandomCard}>Add Random Card</button>
        <div className="List-cards">
          {cards}
        </div>
      </section>
    )
  }
}

export default List;