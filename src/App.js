import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AccountDetails from './components/AccountDetails';

class App extends React.Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={AccountDetails} />
        <Redirect to="/" />
      </Switch>
    );
    return(
      <div>
        {routes}
      </div>
    )
  }
}

export default App;
