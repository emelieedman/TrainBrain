import React, { Component } from "react";
//import auth0Client from "../Auth";
import "./LoadingScreenStyling.css";

function LoadingMessage() {
  return (
    <div className="loading-screen">
      <img
        className="loadingscreen-logo"
        id="trainbrainlogo"
        src={require("./trainbrainlogo.svg")}
        alt="Train Brain Logo."
      />
      <h1>Destressing Your Daily Commute</h1>
      <div className="loading-dot">.</div>
    </div>
  );
}

function LoadingScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    async componentDidMount() {
      try {
        //  await auth0Client.loadSession();
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 2500);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default LoadingScreen;
