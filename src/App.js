import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Achievement from './component/Achievement/Achievement';
import Organizer from './component/Home/Organizer/Organizer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import Details from './component/Home/Details/Details';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider> 
    
    <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
     <Home></Home>
      </Route>
      <Route exact path="/home">
     <Home></Home>
      </Route>
      <Route  path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute path="/planning">
      <Achievement></Achievement>
      </PrivateRoute>
      <Route  path="/order">
        <Organizer></Organizer>
      </Route>

      <PrivateRoute path="/service/:serviceId">
        <Details></Details>
      </PrivateRoute>

      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
      <Route  path="*">
        <NotFound></NotFound>
      </Route>

    </Switch>
   <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
