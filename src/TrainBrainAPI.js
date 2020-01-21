import React from "react";

function TrainBrainAPI() {
  function myApiCall() {
    fetch("http://localhost:8080")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }

  myApiCall();
  return "";
}

export default TrainBrainAPI;
