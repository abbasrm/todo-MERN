import React, { Component } from 'react';
import './AccordionSingleStateful.css';




class AccordionSingleStateful extends Component {

  state ={
    open: false
  }

  data = {
    id: this.props.id,
    title: "One",
    content: `Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.`,
  
  }

  state = {
    open: false
  }

  click = (i) => {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }


  render() {
    const sections = (
      <>
        <div className="title" onClick={this.click.bind(null, this.data.id)}>
    
          <div className="arrow-wrapper">
            <i className={this.state.open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"}></i>
          </div>
    
          <span className="title-text">
            {this.data.title}
          </span>
    
        </div>
    
        <div className={this.state.open ? "content content-open" : "content"}>
    
          <div className={this.state.open ? "content-text content-text-open" : "content-text"}>
            {this.data.content}
          </div>
    
        </div>
      </>
    )

    return (
      <div className="accordion">
        {sections}
      </div>
    );
  }
};


export default AccordionSingleStateful;