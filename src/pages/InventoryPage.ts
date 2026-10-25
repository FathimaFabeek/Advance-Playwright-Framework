import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
   readonly firstItemName: Locator;
  readonly addToCart: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    // TTACart tags elements with data-test, not Playwright's default
    // data-testid, so the page object owns that detail instead of making
    // every spec declare test.use({ testIdAttribute: 'data-test' }).

    const byTest = (id: string) => page.locator(`[data-test="${id}"]`);
    this.title = byTest('title');
    this.firstItemName = byTest('inventory-item-name').first();
    this.addToCart = page.getByRole('button', { name: 'Add to cart' }).first();
    this.shoppingCart = page.getByRole('link', { name: 'Shopping cart' });
  }
 /** Adds the first product and returns its name, so the test can assert on it. */
  async addFirstItemAndOpenCart(): Promise<string> {
    const name = (await this.firstItemName.innerText()).trim();
    await this.addToCart.click();
    return name;
  }

   async openCart() {
    await this.shoppingCart.click();
   }

}
