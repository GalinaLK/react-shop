import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Favorites from './components/Favorites'
import Home from './components/Home'


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <div className="header-container sticky">
        <Header></Header>
      </div>
      <div className="container">

        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
        </div>

      </BrowserRouter>    
      </div>
  );
}

export default App;
