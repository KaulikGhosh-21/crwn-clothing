import './App.css';
import HomePage from '../src/pages/HomePage/HomePage';
import ShopPage from './pages/shop-page/ShopPage';

import { Switch, Route, Link } from "react-router-dom";

import Header from './components/header/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
