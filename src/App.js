import React from 'react'
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
import Faculty from './Components/Faculty'
import Academic from './Components/Academic'
import Admission from './Components/Admission'
import Contact  from './Components/Contact'
import Student from './Components/Student'
import Form from './Components/Form'

const totop = () =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

const App = () => {
  
  return (
    <div className="App">
        <HashRouter>
        <Container>
          <Menu borderless inverted fixed="top" size="huge">
            <Link className="ui header item" to="/" onClick={totop}> TIGP AIoT Program</Link>
            <Link className="ui right item" to="/" onClick={totop}> About </Link>
            <Link className="ui item" to="/faculty" onClick={totop}> Faculty </Link>
            <Link className="ui item" to="/academic" onClick={totop}> Academic </Link>
            <Link className="ui item" to="/admission" onClick={totop}> Admission </Link>
            <Link className="ui item" to="/student" onClick={totop}>Student</Link>
            <Link className="ui item" to="/form_link" onClick={totop}>Form and Link</Link>
            <Link className="ui item" to="/contact" onClick={totop}> Contact </Link>
          </Menu>
        </Container>
        <div id="menu_space"/>
        <Switch>
                <Route exact={true} path="/" component={About}/>
                <Route path="/faculty" component={Faculty}/>
                <Route path="/academic" component={Academic}/>
                <Route path="/admission" component={Admission}/>
                <Route path="/student" component={Student}/>
                <Route path="/form_link" component={Form}/>
                <Route path="/contact" component={Contact}/>
        </Switch>
        <Container>
        <Segment vertical>
            <Grid columns={2}>
              <Grid.Column>
                &copy; 2022 TIGP AIoT · All rights reserved ·{" "}
                Powered by <a href="https://react.semantic-ui.com/">Semantic UI</a>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <a href="/">Back to Homepage</a>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
        </HashRouter>
    </div>
  );
}

export default App;
