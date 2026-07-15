import { ApiEndpoints } from "../../src/utils/apiEndpoints";
import { test, expect } from "../../src/fixtures/index";
import { Product_Schema } from "../../src/utils/schema";
import { APIResponse } from "@playwright/test";
import { EXPECTED_BRANDS } from "../../src/data/brands";

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
//this test is to validate the post request to add product API
test("@api Validate the Post request to add product API", async ({
  apiBasePage,
}) => {
  let response: APIResponse;
  let responseBody: any;
  let uniqueBrands: any;
  await test.step("GET BRAND LIST ", async () => {
    response = await apiBasePage.get(ApiEndpoints.GET_ALL_BRANDS);
    await apiBasePage.ValidateResponseStatusCode(response, 200);
    responseBody = await response.json();
    const actualBrands = responseBody.brands.map(
      (brand: { brand: string }) => brand.brand,
    );
    console.log("Actual Brands:", actualBrands);
    //for unique brands we can use Set to remove duplicates and then convert it back to an array
    uniqueBrands = [...new Set(actualBrands)];
    console.log("Unique Brands:", uniqueBrands);
    expect(uniqueBrands).toEqual(EXPECTED_BRANDS);
  });

  //this step is to verify that the no brands are missing in the response
  await test.step("Verify that the no brands are missing in the response", async () => {
    const missingBrands = EXPECTED_BRANDS.filter(
      (brand) => !uniqueBrands.includes(brand),
    );
    console.log("Missing Brands:", missingBrands);
    expect(missingBrands).toEqual([]);
  });
});
