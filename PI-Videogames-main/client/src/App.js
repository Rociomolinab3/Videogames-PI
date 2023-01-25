import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import GameCreate from './components/GameCreate/GameCreate';
import Detail from './components/Detail/Detail';
//import Loading from './components/Loading/Loading';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route path = '/home' component={Home}/>
        <Route path='/videogame' component={GameCreate}/> 
        <Route path="/detail/:id" component = {Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
