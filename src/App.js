import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem: {
        text:'',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);     //Had to add this when error came state undefined
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const items=[...this.state.items, newItems];       //First parameter unpacks all items in list into individual items, second one added to the list
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }

  }

  render() {
    return (  
      <div className="App">
        <header>
        <div className="heading">Tasks Daily</div>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
             value={this.state.currentItem.text}
             onChange={this.handleInput}
              />
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}
export default App;
