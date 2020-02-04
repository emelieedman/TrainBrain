import React, { Component } from "react";
import styles from "./LoadingScreenStyling.module.css";

//loading message component is made
function LoadingMessage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1 className={styles.message}>
          Destressing
          <br /> your daily <br />
          commute
        </h1>
      </div>
    </div>
  );
}

function LoadingScreen(WrappedComponent) {
  return class extends Component {
    //loading screen is set up, state is set up for changing later.
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }
    //timeout is set to 2.5sec so the screen stays up for a short time, after that loading is set to false
    async componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 2500);
    }

    render() {
      // If loading is truthy then LoadingMessage is displayed, otherwise
      // the wrapped component is returned, in our case App
      if (this.state.loading) return LoadingMessage();

      return <WrappedComponent />;
    }
  };
}

export default LoadingScreen;
