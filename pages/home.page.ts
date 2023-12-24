import { Page, Locator, expect } from "@playwright/test";
import ResimliMenuComponent from "./components/resimlimenu.component";
import BrandListComponent from "./components/brandlistselection.component";

class HomePage {
  _page: Page;
  _closePopupButton: Locator;
  _resimliMenuComponent: ResimliMenuComponent;
  _brandListSelectionComponent: BrandListComponent;

  constructor(page: Page) {
    this._page = page;
    this._closePopupButton = page.getByText("×");
    this._resimliMenuComponent = new ResimliMenuComponent(page);
    this._brandListSelectionComponent = new BrandListComponent(page);
  }

  async navigateTo() {
    await this._page.goto("https://www.grimelange.com.tr");
  }

  async verifyCorrectPage() {
    await expect(this._page).toHaveTitle(
      "Grimelange |  Erkek ve Kadın Giyimde Şıklığın Adresi"
    );
  }
}

export default HomePage;