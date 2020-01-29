import React, { Component } from "react";
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
      <h1>
        Destressing Your
        <br /> Daily Commute
      </h1>
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

      // otherwise, show the desired route (we don't have any props for the wrapped component, App, so could remove it?
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default LoadingScreen;
