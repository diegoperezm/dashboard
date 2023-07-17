import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import React from "react";
// import { useEffect, useState, useCallback } from "react";

import { Container, Col, Row } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/header/";
import Login from "../components/login/";
import Memoria from "../components/memoria/";
import Cpu from "../components/cpu/";
import Procesos from "../components/procesos/";
import Disco from "../components/disco/";

export default function App() {
  let data = [];
  /*
//  Por el momento cada componente usa hardcoded data 
  const [data, setData] = useState(() => {
    const initialState = getInitialData();
    return initialState;
  });
  useEffect(() => {
    //localStorage.setItem("", JSON.stringify(data));
  }, [data]);
*/
  //const handleChange = useCallback( (evt) => {} );

  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route exact path="/memoria">
                  <Memoria data={data} />
                </Route>
                <Route exact path="/cpu">
                  <Cpu data={data} />
                </Route>
                <Route exact path="/procesos">
                  <Procesos data={data} />
                </Route>
                <Route exact path="/disco">
                  <Disco data={data} />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
