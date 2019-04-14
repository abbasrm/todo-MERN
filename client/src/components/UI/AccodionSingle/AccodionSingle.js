import React from "react";
import classes from "./AccodionSingle.module.css";
import classNames from "classnames";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";

const AccordionSingle = props => {
  // const sections = (
  //   <>
  //     <div className={props.cur.open && props.cur.date === data.date? [classes.title, classes.active].join(" "): classes.title} onClick={() => props.clicked(data.date)}>

  //       <div className={classes["arrow-wrapper"]}>
  //       <i className={props.cur.open && props.cur.date === data.date? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"}></i>
  //       </div>

  //       <span className="title-text">
  //         {data.title}
  //       </span>

  //     </div>

  //     <div className={contentClassModules.join(" ")}>

  //       <div className={contentTextClassModules.join(" ")}>
  //         {data.content}
  //       </div>

  //     </div>
  //   </>
  // )

  const contentClass = classNames("content", {
      "content-open": props.acco.open && props.acco.date === props.date
    }),
    contentTextClass = classNames("content-text", {
      "content-text content-text-open":
        props.acco.open && props.acco.date === props.date
    });

  const contentClassModules = contentClass.split(" ").map(cl => {
      return classes[cl];
    }),
    contentTextClassModules = contentTextClass.split(" ").map(cl => {
      return classes[cl];
    });

  const sections = (
    <>
      <div
        className={
          props.acco.open && props.acco.date === props.date
            ? [classes.title, classes.active].join(" ")
            : classes.title
        }
        onClick={() => props.onOpenAcco(props.date)}
      >
        <div className={classes["arrow-wrapper"]}>
          <i
            className={
              props.acco.open && props.acco.date === props.date
                ? "fa fa-angle-down fa-rotate-180"
                : "fa fa-angle-down"
            }
          />
        </div>

        <span className="title-text">{props.date}</span>
      </div>

      <div className={contentClassModules.join(" ")}>
        <div className={contentTextClassModules.join(" ")}>
          {props.children}
        </div>
      </div>
    </>
  );

  return <div className={classes.accordion}>{sections}</div>;
};

const mapStateToProp = state => {
  return {
    acco: state.acco
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOpenAcco: date => dispatch(actions.openAccordion(date))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(AccordionSingle);
