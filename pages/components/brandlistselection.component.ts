import { Page, Locator, expect } from "@playwright/test";
import FilterComponent from "./filter.component";

class BrandListComponent {
  _page: Page;
  _sorting: Locator;
  _filter: Locator;
 
  constructor(page: Page) {
    this._page = page;
    this._sorting = page.locator("#filterOrderSelect");
    this._filter = page.getByText("Filtreleme").nth(2);
    
  }

  async sortBrandListSelection(sortValue: string) {
    await this._sorting.selectOption({ label: sortValue });
  }

  //TODO
  async highlightToElement() {
    // Manipulate the DOM and change the color of an element
    await this._page.evaluate(() => {
      // Select an element by its CSS selector and set styles
      const element = document.getElementById("filterOrderSelect");
      if (element) {
        element.style.backgroundColor = "lightblue";
        element.style.color = "yellow";
        element.style.border = "border: 10px solid powderblue;";
        // Add more styles as needed
      }
    });
  }
}

export default BrandListComponent;
