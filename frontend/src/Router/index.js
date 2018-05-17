import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Components/Header';
import Nav from '../Components/Nav';
import App from './App';
import ScrollToTop from '../Components/ScrollToTop';
import Login from './Login';
import ProjectDetails from './ProjectDetails';
import Overview from './Overview';
// import Signup from './Signup';
// import Footer from '../Сomponents/Footer';
// import SignupValidation from './SignupValidation';

const Home = (props) => {
    return (
      <Router>
        <Switch>
          <ScrollToTop>
            <Header />
            <Nav />
            <Route exact path="/" component={ App } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/project-details/:project_id" component={ ProjectDetails } />
            <Route exact path="/overview" component={ Overview } />
            {/* <Route exact path="/signup" component={ Signup } />
            <Route exact path="/registration/validation" component={ SignupValidation } />
            <Route exact path="/new_restaurant" component={ NewRestaurant } /> */}
            {/* <Footer /> */}
          </ScrollToTop>
        </Switch>
      </Router>
    )
}


export default Home;