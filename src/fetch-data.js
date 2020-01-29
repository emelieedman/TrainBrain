import React from "react";

class DataFetch extends React.Component {
  state = {
    isLoading: true,
    trains: [],
    error: null
  };

  render() {
    const { isLoading, trains, error } = this.state;
    return (
      <React.Fragment>
        <h1>Hello Train API data!</h1>

        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          trains.map(train => {
            const { station, trainnr, predicted_delay_minutes } = train;
            return (
              <div key={station}>
                <p>Train Number: {trainnr}</p>
                <p>Delayed by: {predicted_delay_minutes}</p>
                <hr />
              </div>
            );
          })
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }

  fetchUsers() {
    // Where we're fetching data from
    fetch(`https://labs.thetrainbrain.com/prognosis/`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          trains: data,
          isLoading: false
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }
}
export default DataFetch;
