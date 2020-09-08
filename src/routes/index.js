import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import SeatBooking from '../components/SeatBooking';
import Header from '../components/Header';
const Routes = props => {
  return (
    <Router >
      <Switch>
        <Route exact path='/' render={routerProps => {
          return (
            <>
              <Header />
              <Home {...props} {...routerProps} />
            </>
          )
        }
        } />
        <Route exact path='/book-seat' render={routerProps => {
          return (
            <>
              <Header />
              <SeatBooking {...props} {...routerProps} />
            </>
          )
        }
        } />
      </Switch>
    </Router>
  )

}

export default Routes;