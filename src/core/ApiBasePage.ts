import { APIRequestContext } from "playwright/test";
import { ApiEndpoints } from "../utils/apiEndpoints";

export class ApiBasePage {
  constructor(protected request: APIRequestContext) {}

  async get(endpoint: string) {
    const response = await this.request.get(endpoint);
    return response;
  }
  async post(endpoint: string, data: any) {
    const response = await this.request.post(endpoint, {
      data: data,
    });
    return response;
  }

  async put(endpoint: string, data: any) {
    const response = await this.request.put(endpoint, {
      data: data,
    });
    return response;
  }

  async delete(endpoint: string) {
    const response = await this.request.delete(endpoint);
    return response;
  }

  async ValidateResponseStatusCode(response: any, expectedStatusCode: number) {
    const actualStatusCode = response.status();
  }

  async ValidateResponseBody(response: any, expectedResponseBody: any) {
    const actualResponseBody = await response.json();
  }
}
