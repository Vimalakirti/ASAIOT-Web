import React, { useState } from 'react'
import {HashRouter, Route, Switch, Link} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css"
import {
  Container,
  Menu,
  Segment,
  Grid,
} from "semantic-ui-react";
import "./App.css"

import About from './Components/About'
import Course from './Components/Course'
import Student from './Components/Student'
import Faculty from './Components/Faculty'
import Academic from './Components/Academic'
import Admission from './Components/Admission'
import Contact  from './Components/Contact'

const App = () => {
  
  return (
    <div className="App">
        <HashRouter>
        <Container>
          <Menu borderless inverted fixed="top" size="huge">
            <Link className="ui header item" to="/"> TIGP AIoT Program</Link>
            <Link className="ui right item" to="/"> About </Link>
            <Link className="ui item" to="/course"> Course </Link>
            <Link className="ui item" to="/student"> Student </Link>
            <Link className="ui item" to="/faculty"> Faculty </Link>
            <Link className="ui item" to="/academic"> Academic </Link>
            <Link className="ui item" to="/admission"> Admission </Link>
            <Link className="ui item" to="/contact"> Contact </Link>
          </Menu>
        </Container>
        <Switch>
                <Route exact={true} path="/" component={About}/>
                <Route path="/course" component={Course}/>
                <Route path="/student" component={Student}/>
                <Route path="/faculty" component={Faculty}/>
                <Route path="/academic" component={Academic}/>
                <Route path="/admission" component={Admission}/>
                <Route path="/contact" component={Contact}/>
        </Switch>
        <Container>
        <Segment vertical>
            <Grid columns={2}>
              <Grid.Column>
                &copy; 2021 TIGP AIoT · <a href="#">Privacy</a> ·{" "}
                Powered by <a href="https://unsplash.com/">Unsplash</a>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <a href="#">Back to Homepage</a>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
        </HashRouter>
    </div>
  );
}

export default App;
