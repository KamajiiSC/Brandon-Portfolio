import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage}></Route>
        <Route path='/PortfolioPage' component={PortfolioPage}></Route>
        <Route path='/AboutPage' component={AboutPage}></Route>
        <Route path='/ContactPage' component={ContactPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;