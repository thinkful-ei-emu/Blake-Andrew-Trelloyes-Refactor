import React from 'react';
import '../styles/App.css';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      }
    }
  }

  addRandomCard = (listId) => {
    const cardIds = this.state.lists[listId-1].cardIds;
    const allCards = this.state.allCards;
    const allCardIds = Object.keys(allCards);
    const randomCardId = allCardIds[(Math.ceil(Math.random() * 12) - 1)];
    const newCardIds = [...cardIds, randomCardId];

    let listsCopy = this.state.lists;
    listsCopy[listId-1].cardIds = newCardIds;
    this.setState({
      lists: listsCopy
    });

  }

  deleteById = (id, listId) => {
    console.log(`id : ${id}, listId : ${listId}`);
    const newCardIds = this.state.lists[listId-1].cardIds.filter(cardId => cardId !== id);
    let listsCopy = this.state.lists;
    listsCopy[listId-1].cardIds = newCardIds;
    this.setState({
      lists: listsCopy
    })
  }
  
  render() {
    const store = this.state;
    const lists = store.lists.map((list,index) => {
      const cards = list.cardIds.map((id) => store.allCards[id]);

      return (
        <List
          key={index}
          listId={list.id}
          header={list.header}
          cards={cards}
          deleteById={this.deleteById}
          addRandomCard={this.addRandomCard}
        />
      )
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>
            Trelloyes!
          </h1>
        </header>
        <div className="App-list">
          {lists}
        </div>
      </main>
    )
  }
}

export default App;