export const Product_Schema = {
  type: "object",

  properties: {
    id: {
      type: "number",
    },

    name: {
      type: "string",
    },

    price: {
      type: "string",
    },

    brand: {
      type: "string",
    },

    category: {
      type: "object",

      properties: {
        usertype: {
          type: "object",

          properties: {
            usertype: {
              type: "string",
            },
          },

          required: ["usertype"],
          additionalProperties: false,
        },

        category: {
          type: "string",
        },
      },

      required: ["usertype", "category"],
      additionalProperties: false,
    },
  },

  required: ["id", "name", "price", "brand", "category"],

  additionalProperties: false,
};
