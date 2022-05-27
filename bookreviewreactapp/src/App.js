import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Review from './pages/review/Review';
import Navbar from './components/Navbar';
import Tag from './pages/tag/Tag'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/reviews/:id">
            <Review />
          </Route>
          <Route path = "/:tag">
            <Tag />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;