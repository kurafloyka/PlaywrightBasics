import { Page, Locator, expect } from "@playwright/test";
import ResimliMenuComponent from "./components/resimlimenu.component";
import BrandListComponent from "./components/brandlistselection.component";
import FilterComponent from "./components/filter.component";

class ErkekPantalonPage {
  _page: Page;
  _resimliMenuComponent: ResimliMenuComponent;
  _brandListSelectionComponent: BrandListComponent;
  _pantolonHeader: Locator;
  _filterComponent:FilterComponent;
  constructor(page: Page) {
    this._page = page;
    this._resimliMenuComponent = new ResimliMenuComponent(page);
    this._brandListSelectionComponent = new BrandListComponent(page);
    this._pantolonHeader = page.getByRole("heading", {
      name: "Erkek Pantolon",
      exact: true,
    });
    this._filterComponent = new FilterComponent(page);
  }

  async verifyCorrectPage() {
    await expect(this._page).toHaveURL(
      "https://www.grimelange.com.tr/pantolon"
    );
    await expect(this._pantolonHeader).toBeVisible();
  }
}

export default ErkekPantalonPage;
