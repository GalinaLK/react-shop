import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Favorites from './components/Favorites'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Account from './components/Account'
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import shopStore from './shopStore';


function App() {

  return (
    <Provider store={shopStore}>

    <>     
      <BrowserRouter>
      <div className="header-container sticky">
        <Header></Header>
      </div>
      <main className="container">
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
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
          <Route path="/account">
            <Account />
          </Route>        
        </Switch>
      </main>

      </BrowserRouter>  
      <Footer/>
      </>
      </Provider>

  );
}

export default App;
