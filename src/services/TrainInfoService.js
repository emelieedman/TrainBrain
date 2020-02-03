
const myApiCall = () => {
    return fetch("https://cors-anywhere.herokuapp.com/https://labs.thetrainbrain.com/prognosis/")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data;
      });
}

module.exports.myApiCall = myApiCall