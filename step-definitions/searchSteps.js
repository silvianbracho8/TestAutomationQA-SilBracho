// step-definitions/searchSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { SearchPage } = require('../../pages/searchPage');
const fs = require('fs');

let searchPage;

Given('el usuario está en la página de inicio de Mercado Libre', async function () {
  searchPage = new SearchPage(this.page);
  await searchPage.navigate();
});

When('busca el producto {string}', async function (producto) {
  await searchPage.searchFor(producto);
});

Then('debería ver resultados en la página', async function () {
  await searchPage.expectResults();
});

Then('debería ver resultados relacionados con {string}', async function (producto) {
  try {
    await searchPage.expectResults();

    const titles = await this.page.$$eval('.ui-search-item__title', els =>
      els.map(e => e.textContent.toLowerCase())
    );

    const match = titles.some(title => title.includes(producto.toLowerCase()));

    if (!match) throw new Error('Ningún resultado está relacionado con el producto buscado');
  } catch (error) {
    if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');
    await this.page.screenshot({ path: `screenshots/fallo_${producto}.png` });
    throw error;
  }
});

Then('debería ver un mensaje indicando que no hay resultados', async function () {
  const rescueTitle = await this.page.textContent('.ui-search-rescue__title');
  if (!rescueTitle || !rescueTitle.toLowerCase().includes('no encontramos resultados')) {
    throw new Error('No se mostró el mensaje esperado de "sin resultados".');
  }
});