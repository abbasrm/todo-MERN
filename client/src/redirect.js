import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import CompletedTasks from './components/Tasks/CompletedTasks/CompletedTasks';
import UncompletedTasks from './components/Tasks/UncompletedTasks/UncompletedTasks';
import Navigation from './components/Navigation/Navigation';
import Auth from './components/Auth/Auth';
import todoStyle from './hoc/todoStyle'

const redirect = props => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/completed-tasks" component={todoStyle(CompletedTasks)} />
        <Route exact path="/uncompleted-tasks" component={todoStyle(UncompletedTasks)} />
        <Route exact path="/auth" component={todoStyle(Auth)} />
        <Route exact path="/" component={App} />
      </Switch>
    </>
  );
};

export default redirect;
