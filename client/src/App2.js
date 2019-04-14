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
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    this.getInput = this.getInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getInput(e){
    e.preventDefault();

    let title = e.target.elements.title.value;
    let detail = e.target.elements.detail.value;

    const itemsArr = this.state.items;
    const newInput = {
      title: title,
      detail: detail,
      done: false
    }
    
    if(title !== "" && detail !== ""){
      itemsArr.push(newInput);

      this.setState({
        item:{
          title: '',
          detail: ''
        },
        items: itemsArr });
    }
  }
  
  handleTitle(e){
    let inputTitle = e.target.value;
    this.setState(prevState => ({
      item: {
        ...prevState,
        title: inputTitle
      }
    }))
  }
  
  handleDetail(e){
    let input = e.target.value;
    this.setState(prevState=> ({
      item: {
        ...prevState.item,
        detail: input
      }
    }))
  }
  deleteItem(e){
    let del = e.target.value;
    this.setState({ test: del })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sn-12">

            <Form
            input={this.getInput}
            title={this.handleTitle}
            detail={this.handleDetail}
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
