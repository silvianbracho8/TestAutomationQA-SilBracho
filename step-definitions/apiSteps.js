const { Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');

let response;

Given('que realizo un GET al endpoint {string}', async function (url) {
  response = await axios.get(url);
});

Then('debería recibir un código de estado 200', function () {
  if (response.status !== 200) {
    throw new Error(`Código de estado inesperado: ${response.status}`);
  }
});