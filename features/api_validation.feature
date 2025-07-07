Feature: Validación simple de API pública de Mercado Libre

  @api
  Scenario: Consultar endpoint de monedas
    Given que realizo un GET al endpoint "https://api.mercadolibre.com/currencies"
    Then debería recibir un código de estado 200