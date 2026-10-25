import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly firstItem: Locator;
  readonly title: Locator;
  readonly itemName: Locator;
  readonly itemPrice: Locator;

  constructor(page: Page) {
     // TTACart uses data-test, not Playwright's default data-testid.
    const byTest = (id: string) => page.locator(`[data-test="${id}"]`);
    this.title = byTest('title');
     this.itemName = byTest('inventory-item-name');
    this.itemPrice = byTest('inventory-item-price');
    this.firstItem = page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (Red)' });
  }
  async cart(){
    await this.firstItem.click();

  }
}
