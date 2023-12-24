import { Page, Locator, expect } from "@playwright/test";

class FilterComponent {
  _page: Page;
  _kategori: Locator;
  _bedenOption: Locator;
  _renkOption : Locator;
  

  constructor(page: Page) {
    this._page = page;
    this._kategori=page.getByRole("link", { name: "Kargo Pantolon" });
    this._bedenOption=page.locator('');
    this._renkOption=page.locator('');
  }
}

export default FilterComponent;
