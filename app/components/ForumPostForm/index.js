import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ForumPost from './forumPost';

const Test1 = props => {
  console.log(props);
  return (
    <div>Test1</div>
  )
}

const Test2 = props => {
  return (
    <div>Test2</div>
  )
}

const Default = props => {
  return (
    <div>Default</div>
  )
}

const EosioForum = props => {
  const passProps = {...props};
  return (
    <Switch>
      <Route path={`/community/forumpost/test1`} render={() => (<ForumPost {...passProps}/>) } />
    </Switch>
  )
}

export default EosioForum;
