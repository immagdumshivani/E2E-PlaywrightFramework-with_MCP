import { BasePage } from "../../core/BasePage";
import { ProductLocators } from "../../locators/products/ProductLocators";

export class ProductPage extends BasePage {
  async openProductsPage() {
    await this.click(ProductLocators.productsNavLink);
    await this.page.waitForLoadState("networkidle");
  }

  async isProductsPageVisible() {
    return await this.page
      .locator(ProductLocators.productsPageHeading)
      .isVisible();
  }

  async validateProductList() {
    const productCards = this.page.locator(ProductLocators.productCard);
    const count = await productCards.count();
    return count > 0;
  }
}
