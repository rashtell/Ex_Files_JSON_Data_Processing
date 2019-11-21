
// JSON containing schema for product data
var productSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "http://example.com/schemas/products.json",
  "title": "h+ sport products",
  "description": "schema for h+ sport product data",
  "type": "object",
  "properties": {
    "products": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "image": {
            "type": "string"
          },
          "alt": {
            "type": "string"
          }
        },
        "required": [
          "image",
          "alt",
          "name"
        ]
      }
    }
  },
  "required": [
    "products"
  ]
};

// JSON containing schema for person data
var personSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "http://example.com/schemas/people.json",
  "title": "h+ sport people",
  "description": "schema for h+ sport person cards",
  "type": "object",
  "properties": {
    "cards": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "img": {
            "type": "object",
            "properties": {
              "src": {
                "type": "string"
              },
              "alt": {
                "type": "string"
              }
            },
            "required": [
              "src",
              "alt"
            ]
          },
          "cardInfo": {
            "type": "object",
            "properties": {
              "cardName": {
                "type": "string"
              },
              "cardTitle": {
                "type": "string"
              }
            },
            "required": [
              "cardName",
              "cardTitle"
            ]
          },
          "cardText": {
            "type": "string"
          }
        },
        "required": [
          "img",
          "cardInfo",
          "cardText"
        ]
      }
    }
  },
  "required": [
    "cards"
  ]
};