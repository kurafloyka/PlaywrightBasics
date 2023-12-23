import { Page, Locator, expect } from "@playwright/test";
import ResimliMenuComponent from "./components/resimlimenu.component";
import BrandListComponent from "./components/brandlistselection.component";
import FilterComponent from "./components/filter.component";
import ProductDetailsComponent from "./components/product.details.component";
import SepetComponent from "./components/sepet.component";

class KargoPantalonPage {
  _page: Page;
  _resimliMenuComponent: ResimliMenuComponent;
  _brandListSelectionComponent: BrandListComponent;
  _filterComponent: FilterComponent;
  _randomKargoPantalon: Locator;
  _kargoPantolonHeader: Locator;
  _productDetailsComponent: ProductDetailsComponent;
  _sepetComponent: SepetComponent;

  constructor(page: Page) {
    this._page = page;
    this._resimliMenuComponent = new ResimliMenuComponent(page);
    this._brandListSelectionComponent = new BrandListComponent(page);
    this._filterComponent = new FilterComponent(page);
    this._randomKargoPantalon = page.getByRole("link", {
      name: "CARGO Dokuma Comfort Siyah",
    });
    this._kargoPantolonHeader = page.getByRole("heading", {
      name: "Kargo Pantolon",
      exact: true,
    });
    this._productDetailsComponent = new ProductDetailsComponent(page);
    this._sepetComponent = new SepetComponent(page);
  }

  async verifyCorrectPage() {
    //soft assertion
    await expect.soft(this._kargoPantolonHeader).toBeVisible();
  }
}

export default KargoPantalonPage;
