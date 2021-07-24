import './App.css';
import { Component } from 'react';
import Cardlist from './components/cardlist/Cardlist';
import Searchbox from './components/searchbox/Searchbox';

class App extends Component {
  constructor(){
    super()
    this.state = {
      angels: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ angels: users }))
  }

  handlechange = e => this.setState({ searchField: e.target.value })

  render(){
    const { angels, searchField } = this.state
    const filterAngels = angels.filter( angel => angel.name.toLowerCase().includes(searchField.toLocaleLowerCase()) )
    return (
      <div className="App">
        <h1>REACT BASIC</h1>

        <Searchbox placeholder="search robots" handlechange={ this.handlechange }></Searchbox>

        <Cardlist angels={filterAngels}></Cardlist>

      </div>
    );
  }
  
}

export default App;
