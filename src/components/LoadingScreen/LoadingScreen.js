import React, { Component } from "react";
import styles from "./LoadingScreenStyling.module.css";

function LoadingMessage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1 className={styles.message}>
          DESTRESSING
          <br /> YOUR DAILY <br />
          COMMUTE
        </h1>
      </div>
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
      //API fetch goes here
      //await. TrainInfoService

      //try {
        setTimeout(() => {
        this.setState({
          loading: false
        });
    }, 2500);
    }
      //  } catch (err) {
      //    console.log(err);
      //    this.setState({
      //      loading: false
      //    });
      //  }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route (we don't have any props for the wrapped component, App, so could remove it?
      //Fetched data goes into prop of WrappedComponent!
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default LoadingScreen;
