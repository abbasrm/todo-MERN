import React, { Component } from 'react';
import './App.css';
import { Table } from './components/Table.jsx'
import { Form } from './components/Form.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: '',
      item: {
        title: '',
        detail: '',
        done: ''
      },
      items: []
    }
    this.getInput = this.getInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getInput(e){
    e.preventDefault();

    let title = e.target.elements.title.value;
    let detail = e.target.elements.detail.value;

    const newItem = {
      title: title,
      detail: detail,
      done: false
    }
    
    if(title !== "" && detail !== ""){
      const oldItems = this.state.items;
      //oldItems.push(newItem);

      this.setState({
        item:{
          title: '',
          detail: ''
        },
        items: [...oldItems, newItem] });
    }
  }

  deleteItem(e){
    let del = e.target.value;
    this.setState({ test: del })
  }

  render() {
    return (
      <div className="container mt-5" style={{ border: '1px solid #ccc' }}>
        <div className="row">
          <div className="col-lg-12 col-sm-12">

            <Form
            input={this.getInput}
            itemTitle={this.state.item.title}
            itemDetail={this.state.item.detail}
            />
            
            <Table
            items={this.state.items}
            deleteItem={this.deleteItem}
            />
            <p>{this.state.test}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
