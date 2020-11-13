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
import icon from './facebook.svg';

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
                <a href="https://dribbble.com/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  D
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", marginRight: "7%", backgroundColor: "white"}}>
                <a href="https://www.pinterest.com/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  P
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", marginRight: "7%", backgroundColor: "white"}}>
                <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  L
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", marginRight: "7%", backgroundColor: "white"}}>
                <a href="https://twitter.com/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
                  T
                </a>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", border: "1px solid white", borderRadius: "100px", backgroundColor: "white"}}>
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "#2cbce8"}}>
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

  constructor(props) {
    super(props);

    this.whenFocused = this.whenFocused.bind(this);
    this.whenBlurred = this.whenBlurred.bind(this);

    this.state = {
      email: styles.inputOnBlur,
      password: styles.inputOnBlur
    }
  }

  whenFocused(e) {
    if(e == 1) {
      this.setState({password: styles.inputOnFocus});
    }
    else {
      this.setState({email: styles.inputOnFocus});
    }
  }

  whenBlurred(e) {
    if(e == 1) {
      this.setState({password: styles.inputOnBlur});
    }
    else {
      this.setState({email: styles.inputOnBlur});
    }
  }

  render() {
    return (
        <div style={{display: "flex", paddingLeft: "5%", paddingRight: "12%", paddingTop: "5%", backgroundColor: "#f0f2f5"}}>

          <div style={{width: "100%", paddingBottom: "112px", paddingTop: "72px"}}>

            <div style={{display: "flex", margin: "0 auto", padding: "20px 0", width: "980px"}}>

              <div style={{marginRight: "0", paddingRight: "32px", width: "580px"}}>

                <div style={{padding: "116px 0 16px"}}>

                  <img src={icon} alt="Facebook logo" style={{height: "106px", margin: "-26px"}} />

                </div>

                <h2 style={{margin: "0", fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif", fontSize: "28px", fontWeight: "normal", lineHeight: "32px", width: "500px"}}>
                  {'Connect with friends and the world around you on Facebook.'}
                </h2>

              </div>

              <div style={{height: "456px", width: "396px"}}>

                <div style={styles.form}>

                  <div>

                    <div style={{fontSize: "17px", width: "364px", margin: "auto", padding: "6px 0"}}>

                      <input className="fb_email" name="email" id="email" placeholder="Email or Phone Number" autofocus="1" onFocus={() => this.whenFocused(0)} onBlur={() => this.whenBlurred(0)} style={this.state.email} />

                    </div>

                    <div style={{fontSize: "17px", width: "364px", margin: "auto", padding: "6px 0"}}>

                      <input type="password" className="fb_email" name="password" id="password" placeholder="Password" onFocus={() => this.whenFocused(1)} onBlur={() => this.whenBlurred(1)} style={this.state.password} />

                    </div>

                  </div>

                  <div style={{paddingTop: "6px"}}>

                    <button type="button" style={styles.loginButton}>{'Log in'}</button>

                  </div>

                  <div style={{marginTop: "16px"}}>

                    <a href="" rel="noreferrer" target="_blank" style={{fontFamily: "Helvetica, Arial, sans-serif", color: "#1877f2", fontSize: "14px", fontWeight: "500", textDecoration: "none"}}>{'Forgot Password?'}</a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      );
  }
}

styles.form = {
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
  marginTop: "40px",
  padding: "10px 0px 24px",
  width: "396px",
  textAlign: "center"
}

styles.inputOnFocus = {
  fontSize: "17px",
  borderRadius: "6px",
  padding: "14px 16px",
  width: "330px",
  height: "22px",
  border: "1px solid #1877f2",
  boxShadow: "0 0 0 2px #e7f3ff",
  caretColor: "#1877f2"
}

styles.inputOnBlur = {
  fontSize: "17px",
  borderRadius: "6px",
  padding: "14px 16px",
  width: "330px",
  border: "1px solid #dddfe2",
  height: "22px"
}

styles.loginButton = {
  backgroundColor: "#1877f2",
  border: "none",
  borderRadius: "6px",
  fontSize: "20px",
  lineHeight: "48px",
  padding: "0 16px",
  width: "368px",
  margin: "auto",
  fontWeight: "bold",
  color: "white"
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