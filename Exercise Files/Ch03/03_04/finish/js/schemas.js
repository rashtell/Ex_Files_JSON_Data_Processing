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

