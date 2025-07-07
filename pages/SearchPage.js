const { expect } = require('@playwright/test');

class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = 'input[name="as_word"]';
    this.searchResults = '.ui-search-result__content';
    this.noResultsMessage = 'h2.ui-search-search-result__title';
  }

  async navigate() {
    await this.page.goto('https://www.mercadolibre.com.ar/');
  }

  async buscarProducto(producto) {
    await this.page.locator(this.searchInput).fill(producto);
    await this.page.keyboard.press('Enter');
  }

  async verificarResultados() {
    await this.page.waitForSelector(this.searchResults, { timeout: 10000 });
    const resultsCount = await this.page.locator(this.searchResults).count();
    expect(resultsCount).toBeGreaterThan(0);
  }

  async verificarMensajeSinResultados() {
    await this.page.waitForSelector(this.noResultsMessage, { timeout: 10000 });
    const mensaje = await this.page.textContent(this.noResultsMessage);
    expect(mensaje.toLowerCase()).toContain('no encontramos resultados');
  }
}

module.exports = SearchPage;