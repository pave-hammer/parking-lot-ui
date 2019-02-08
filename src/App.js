import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import userBook from './components/userBook'
import Root from './components/Root'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpaceManagerList from './components/spacemanagerlist'
const url = 'https://sparky-server.herokuapp.com/currentusers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      customers: [],
      navSearch: false,
      isLoggedIn: false,
      dummyData: [
        {
          licPlate: "xyz123",
          name: "Mike",
          time: 8
        },
        {
          licPlate: "abc987",
          name: "Zeke",
          time: 6
        }
      ]
    }
  }

  async componentDidMount() {
    setInterval(() => this.getData(), 5000)
  }

  getData = async () => {
    const response = await fetch(url)
    const json = await response.json()
    this.setState({ customers: json })
  }

  userLogged = () => this.setState({
    navSearch: !this.state.navSearch,
    isLoggedIn: true
  })
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Route path="/" exact component={Root} />
            <Route path="/sPark-userBook" component={userBook} />
            <Route path="/sPark-login" render={() => <Login
              navSearch={this.state.navSearch}
              isLoggedIn={this.isLoggedIn}
            />} />
            <Route path="/sPark-space-manager-page" render={() => <SpaceManagerList isLoggedIn={this.state.isLoggedIn} customers={this.state.customers} />} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;