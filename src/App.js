import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/list';

class App extends Component {
  state = {
    items: [
      {title: 'Parsa'},
      {title: 'Ali'},
      {title: 'Arsham'},
    ],
  }

  WantAdd(e) {
    e.preventDefault();
    const value = this.refs.input.value;
    //const newItem = {title: value};
    const lastData = this.state.items;
    const newdata = [...lastData, {title: value}]

    this.setState({
      items: newdata
    });
    console.log(this.state, value);

  }

  render() {
    return (
      <div className="App">
        <form  className="form" onSubmit={(e) => this.WantAdd(e)}>
          <input ref="input"  type="text"className="form-control" placeholder="new item.."/>
          <button className="btn btn-info">add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
