import './styles/App.css';
import Home from './pages/homepage/Home';
import Sidebar from './components/sidebar/Sidebar';
import Errors from './pages/errorspage/Errors';
import Instructions from './pages/instructionspage/Instructions';
import Saved from './pages/savedpage/Saved';
import { FiHome, FiAlertCircle, FiBookmark, FiCheckSquare, FiLogOut, FiAirplay, FiAward } from 'react-icons/fi';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const SIDEBAR_UI_DATA = [
    {
        id: 0,
        sidebarTitle: "Overview",
        sidebarIcon: <FiHome/>,
        route: "/"
    },
    {
        id: 1,
        sidebarTitle: "Errors",
        sidebarIcon: <FiAlertCircle/>,
        route: "/errors"
    },
    {
        id: 2,
        sidebarTitle: "Instructions",
        sidebarIcon: <FiCheckSquare/>,
        route: "/instructions"
    },
    {
        id: 3,
        sidebarTitle: "Saved",
        sidebarIcon: <FiBookmark/>,
        route: "/saved"
    },
    {
        id: 4,
        sidebarTitle: "Tutorials",
        sidebarIcon: <FiAirplay/>,
        route: "/tutorials"
    },
    {
        id: 5,
        sidebarTitle: "Logout",
        sidebarIcon: <FiLogOut/>,
        route: "/logout"
    },
    {
      id: 6,
      sidebarTitle: "Best Practice",
      sidebarIcon: <FiAward/>,
      route: "/bestpractice"
  },
]
  return (
    <Router>
      <div className="app">
      <Sidebar SIDEBAR_UI_DATA={SIDEBAR_UI_DATA}/>
        <Switch>
          <Route exact path="/errors" component={() => <Errors/>}/>
          <Route exact path="/bestpractice" component={() => <Errors/>}/>
          <Route exact path="/instructions" component={() => <Instructions/>}/>
          <Route exact path="/saved" component={() => <Saved/>}/>
          <Route exact path="/logout" component={() => <Home/>}/>
          <Route exact path="/tutorials" component={() => <Home/>}/>
          <Route exact path="/" component={() => <Home/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
