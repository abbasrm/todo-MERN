import React from 'react';

export const Aux = props => props.children;

export const DivWithClass = props => {
  return (
    <div className={props.classes}>
      {props.children}
    </div>
  )
}
// <DivWithClass classes="some-class-name">
//    JSX content..
// </DivWithClass>

export const divRaper = (Component, classes) => {
  return (props) => {
    return (
    <div className={classes}>
      <Component {...props}/>
    </div>)
  }
}
// export default divRaper(App, 'some-class-name')