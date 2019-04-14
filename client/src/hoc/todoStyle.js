import React, { Component } from "react";
import classes from "./withStyles.module.css";

// usually wrapper components (hoc) used to share functions not styles definetly!
// to be changed later to smth useful..
const todoStyle = StyledComponent => {
  return class extends Component {
    render() {
      return (
        <div className={[classes["App-class"]]}>
          <div
            className={classes["container"]}
            style={{ border: "1px solid #ccc" }}
          >
            <div className="row"  style={{padding: '15px 5px'}}>
              <div className="col-lg-12 col-sm-12">
                <StyledComponent {...this.props} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
};

export default todoStyle;
