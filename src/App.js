import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';
import Login from 'src/components/Login';
import Home from 'src/components/Home';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
