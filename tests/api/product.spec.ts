import { ApiEndpoints } from "../../src/utils/apiEndpoints";
import { test, expect } from "../../src/fixtures/index";
import { Product_Schema } from "../../src/utils/schema";
import { APIResponse } from "@playwright/test";

test("@api Validate product list API response and schema", async ({
  apiBasePage,
  schemaValidator,
}) => {
  let response: APIResponse;
  let responseBody: any;

  await test.step("Send GET request to product List API", async () => {
    response = await apiBasePage.get(ApiEndpoints.GET_PRODUCT_LIST);
    await apiBasePage.ValidateResponseStatusCode(response, 200);
    responseBody = await response.json();
    console.log("Response Body:", responseBody.products[1]);
  });

  await test.step("Validate Responce Schema", async () => {
    const isValidSchema = schemaValidator.validateResponseSchema(
      responseBody.products[1],
      Product_Schema,
    );
    await expect(isValidSchema).toBe(true);
  });
});
