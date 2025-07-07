Feature: Búsqueda personalizada en Mercado Libre

  @ui
  Scenario: Buscar iPhone 13 con almacenamiento específico
    Given que el usuario abre Mercado Libre
    When busca "iPhone 13 128gb"
    Then debería ver resultados relacionados con "iPhone 13 128gb"

  @ui
  Scenario: Buscar un producto inexistente
    Given que el usuario abre Mercado Libre
    When busca "iPhone 13 versión oro rosa edición limitada 999tb"
    Then debería ver un mensaje indicando que no hay resultados