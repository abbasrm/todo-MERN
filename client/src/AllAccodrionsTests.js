import React, { Component } from "react";

import Accordion from './components/Accordion/Accordion';
import AccodionSingle from './components/AccodionSingle/AccodionSingle';
import AccordionSingleStateful from './components/AccordionSingleStateful/AccordionSingleStateful'


// Comments are usually another way of doing the same thing after or before that comment (and mostly in ES5 or less recommended way).

let data = [
  {
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
                  mollit anim id est laborum.`
  }, {
    title: "Two",
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
                  mollit anim id est laborum.`
  }, {
    title: "Three",
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
                  mollit anim id est laborum.`
  }
];

class AllAccordionTests extends Component {
  state = {
    currentAccLi: {
      id: null,
      open: false,
    }
  };

  openAccLi = (liId) => {

    this.setState(({ currentAccLi }) => ({
      currentAccLi: {
        open: !currentAccLi.open,
        test: !currentAccLi.test,
        id: liId
      }
    }))

  }

  render = () => {
    return (
      <React.Fragment>

          <hr />
          <hr />

          <Accordion data={data} />
          <hr />
          <AccodionSingle
            id={11}
            clicked={this.openAccLi}
            cur={this.state.currentAccLi} />

          <AccodionSingle
            id={12}
            clicked={this.openAccLi}
            cur={this.state.currentAccLi} />
          <hr />
          <AccordionSingleStateful id={11} />
          <AccordionSingleStateful id={11} />

          <hr />
          <hr />

      </React.Fragment>


    );
  };
}

export default AllAccordionTests;
