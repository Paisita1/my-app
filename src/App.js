import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './App.css';
import logo from './arrowDown.svg';
import quotation from './speechMarks.svg';
import camera from './freelance-photography.svg';
import page from './projects.png';

const styles = {}

export default class ThriveSolo extends React.Component {

  render() {
    return (
      <div style = {{display: "flex", flexDirection: "column", height: "100%", width: "100%"}}>
        <Router>
          <div style = {styles.navWrapper}>
            <ul style = {styles.navInner}>
              <NavLink to = "/home" className="navButton" style = {styles.navButton} activeStyle = {{background: "white", color: "#2cbce8"}}>
                Home
              </NavLink>
              <NavLink to = "/plans" style = {styles.navButton} activeStyle = {{background: "white", color: "#2cbce8"}}>
                Price Plan's
              </NavLink>
              <NavLink to = "/blog" style = {styles.navButton} activeStyle = {{background: "white", color: "#2cbce8"}}>
                Blog
              </NavLink>
              <NavLink to = "/trial" style = {styles.trial} activeStyle = {{background: "white", color: "#2cbce8"}}>
                Take a Trial
              </NavLink>
              <NavLink to = "/login" style = {styles.login} activeStyle = {{background: "white", color: "#2cbce8"}}>
                Login
              </NavLink>
            </ul>
          </div>
          
          <Switch>
            <Route exact path = "/home">
              <Home />
            </Route>
            <Route path = "/plans">
              <Plans />
            </Route>
            <Route path = "/blog">
              <Blog />
            </Route>
            <Route path = "/trial">
              <Trial />
            </Route>
            <Route path = "/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", paddingLeft: "5%", paddingRight: "12%", paddingTop: "5%"}}>

        <div style={{display: "flex", width: "100%", borderBottom: "1px dotted white", marginBottom: "130px"}}>

          <div style={{display: "flex", flexDirection: "column", paddingTop: "50px"}}>

            <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", width: "100px", height: "100px", border: "1px solid white", borderRadius: 100, marginBottom: "40px"}}>
              <h2 style={{color: "#2cbce8"}}>
              thrive
              </h2>
            </div>

            <h1 style={styles.firstSentence}>
            {'Running a business is hard.'}
            </h1>
            <h1 style={styles.secondSentence}>
            {'Luckily youve just found your wingman...'}
            </h1>

            <img src={logo} alt="Down Arrow" width="50px" style={{marginBottom: "130px"}} />

          </div>

          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: "30px", paddingLeft: "20px"}}>

            <button style={{backgroundColor: "white", width: "223px", height: "39px", color: "#2cbce8", fontSize: "20px", border: "white", borderRadius: "5px"}}>
              Start your trial
            </button>

            <div style={{display: "flex", width: "100%", borderTop: "1px dotted white", marginTop: "30px", paddingTop: "21px"}}>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", marginRight: "7%", backgroundColor: "white"}}>
                <a href="https://dribbble.com/" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  D
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", marginRight: "7%", backgroundColor: "white"}}>
                <a href="https://www.pinterest.com/" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  P
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", marginRight: "7%", backgroundColor: "white"}}>
                <a href="https://www.linkedin.com/" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  L
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", marginRight: "7%", backgroundColor: "white"}}>
                <a href="https://twitter.com/" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  T
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", backgroundColor: "white"}}>
                <a href="https://www.facebook.com/" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  F
                </a>
              </div>

            </div>

          </div>

        </div>

        <div style={{display: "flex", width: "100%", paddingBottom: "135px", borderBottom: "1px dotted white", marginBottom: "130px"}}>

          <div style={{display: "flex", flexDirection: "column", width: "496px", paddingRight: "9%"}}>

            <img src={quotation} alt="Quotes" style={{width: "70px"}} />

            <h2 style={styles.quote}>
              {'Thrive’s a great assistant and an elegant way to ensure your creative projects run smoothly.'}
            </h2>

            <div style={{fontWeight: 400, color: "white"}}>
              {'PHOTOGRAPHER Gerald Foster'}
            </div>

          </div>

          <div style={{display: "flex", width: "50%"}}>
            <img src={camera} alt="Camera" style={{width: "100%"}} />
          </div>

        </div>

        <div style={{display: "flex", width: "100%", paddingBottom: "135px", borderBottom: "1px dotted white", marginBottom: "130px"}}>

          <div style={{width: "50%"}}>
            <img src={page} alt="page" style={{width: "100%"}} />
          </div>

          <div style={{width: "50%", paddingLeft: "7%", paddingRight: "15%", paddingTop: "25px"}}>

            <h3 style={{color: "white"}}>
              {'MANAGE AND ANALYSE PROJECTS'}
            </h3>

            <p style={{color: "white", fontSize: "1.5rem", lineHeight: "1.8rem"}}>
              {`Keep up-to-date with your workload, review your performance, analyse
                percentage of deadlines met and manage your time and tasks. Stay on-top so you can take on more and increase earnings.`}
            </p>

            <img src={logo} alt="Down Arrow" width="50px" style={{marginTop: "72px"}} />

          </div>

        </div>

      </div>
    );
  }
}

styles.firstSentence = {
  // width: "675px",
  // fontFamily: "sans-serif",
  font: "3.2rem/1.10 clarendonLight, Georgia",
  color: "white",
  margin: 0,
}

styles.secondSentence = {
  maxWidth: "650px",
  // fontFamily: "sans-serif",
  font: "3.2rem/1.10 clarendonLight, Georgia",
  color: "white",
  margin: 0,
  marginBottom: "50px"
}

styles.quote = {
  font: "2.4rem/1.10 clarendonLight, Georgia",
  color: "white",
  paddingBottom: "50px",
  borderBottom: "1px dotted white"
}

class Plans extends React.Component {
  render() {
    return (
        <p>yo</p>
      );
  }
}

class Blog extends React.Component {
  render() {
    return (
        <p>yo</p>
      );
  }
}

class Trial extends React.Component {
  render() {
    return (
        <p>yo</p>
      );
  }
}

class Login extends React.Component {
  render() {
    return (
        <p>yo</p>
      );
  }
}

styles.navWrapper = {
  position: "fixed",
  top: 0,
  width: "100%",
  borderBottom: "1px solid white",
  backgroundColor: "#2cbce8"
};

styles.navInner = {
  margin: "auto",
  paddingRight: "5%",
  paddingLeft: "5%"
}

styles.navButton = {
  fontFamily: "sans-serif",
  fontWeight: "600",
  fontSize: "0.85rem",
  lineHeight: "1.5rem",
  paddingTop: "10px",
  paddingBottom: "10px",
  width: "146px",
  float: "left",
  borderRight: "1px dotted white",
  textAlign: "center",
  textDecoration: "none",
  color : "white",
}

styles.login = {
  fontFamily: "sans-serif",
  fontWeight: "600",
  fontSize: "0.85rem",
  lineHeight: "1.5rem",
  paddingTop: "10px",
  paddingBottom: "10px",
  float: "right",
  textAlign: "center",
  width: "75px",
  textDecoration: "none",
  color : "white",
}

styles.trial = {
  fontFamily: "sans-serif",
  fontWeight: "600",
  fontSize: "0.85rem",
  lineHeight: "1.5rem",
  paddingTop: "10px",
  paddingBottom: "10px",
  float: "right",
  textAlign: "center",
  width: "125px",
  textDecoration: "none",
  color : "white",
}