
const myApiCall = () => {
    return fetch("http://localhost:8080")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data;
      });
}

module.exports.myApiCall = myApiCall