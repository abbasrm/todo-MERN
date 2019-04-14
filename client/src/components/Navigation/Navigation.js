import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './Navigation.module.css'

const Navigation = () => {
    return (
            <div className="container my-3">
            <div className="row">
              {/* <div className="col-lg-12 col-sm-12"></div> */}
            <NavLink
                exact={true}
                to="/"
                className={classes['nav-item']}
                activeClassName={classes['active']}>Home</NavLink>
            <NavLink
                to="/completed-tasks"
                className={classes['nav-item']}
                activeClassName={classes['active']}>Completed Tasks</NavLink>
            <NavLink
                to="/uncompleted-tasks"
                className={classes['nav-item']}
                activeClassName={classes['active']}>Passed Tasks</NavLink>
            <NavLink
                to="/auth"
                className={classes['nav-item']}
                activeClassName={classes['active']}>Login</NavLink>
            </div>
            </div>
    );
};

export default Navigation;