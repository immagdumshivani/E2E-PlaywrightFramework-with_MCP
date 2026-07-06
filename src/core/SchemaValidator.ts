export class SchemaValidator {
  constructor() {}

  validateResponseSchema(response: any, schema: any) {
    const Ajv = require("ajv");
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const isValid = validate(response);

    if (!isValid) {
      console.log("Schema Validation Errors:", validate.errors);
    }
    return isValid;
  }
}
