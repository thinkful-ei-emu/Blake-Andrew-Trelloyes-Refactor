import React from 'react';
import '../styles/App.css';
import List from './List';

class App extends React.Component {
  render() {
    const store = this.props.store
    const lists = store.lists.map(list => {
      const cards = list.cardIds.map(id => store.allCards[id]);

      return (
        <List
          key={list.id}
          header={list.header}
          cards = {cards}
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