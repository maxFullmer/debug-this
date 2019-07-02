import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friendsList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      friend: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  changeHandler(event) {
    this.setState({
      friend: event.target.value
    });
  }

  addFriend() {
    let myUpdatedList = this.state.friendsList.slice();
    myUpdatedList.push(this.state.friend);
    this.setState({
      friendsList: myUpdatedList
    })

    }
    // this.state.friendsList.push(this.state.friend);
  

  deleteFriend(index) {
    let myUpdatedList = this.state.friendsList.slice();
    myUpdatedList.splice(index,1);
    this.setState({
      friendsList: myUpdatedList
    });
    // this.state.friendsList.splice(index, 1);
  }

  render() {
    const mappedFreinds = this.state.friendsList.map((friend, index) => {
      return (
      <div key={index}>
        <span>{friend}</span>
        <button onClick={() => this.deleteFriend(index)}>Delete </button>
      </div>
    );
    });
    return (
      <div className="App">
        <div>{mappedFreinds}</div>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.friend}
        />
        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    );
  }
}

export default App;
