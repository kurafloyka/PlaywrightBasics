import { Page, Locator, expect } from "@playwright/test";
class ResimliMenuComponent {
  _page: Page;
  _erkekMenu: Locator;
  _pantolonOption:Locator;
  constructor(page:Page) {
    this._page = page;
    this._erkekMenu=page.getByRole("link", { name: "ERKEK", exact: true });
    this._pantolonOption=page.getByRole("link", { name: "Pantolon", exact: true });
  }
}

export default ResimliMenuComponent;
