/*
Get request for the zipcodes which is used in the app.js
*/

// Packages
const axios = require('axios');

module.exports.getZipCodes = function(callback) {
  axios.get('https://services.datafordeler.dk/DAR/DAR/1/REST/postnummer?')
    .then(function (response) {
      callback(response.data)
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}