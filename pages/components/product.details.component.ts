import { Page, Locator, expect } from "@playwright/test";

class ProductDetailsComponent {
  _page: Page;
  _bedenOption: Locator;
  _renkOption: Locator;
  _addToCartButton: Locator;
  _price: Locator;
  _indirimliFiyat: Locator;
  _bedenText: string = "XXL";
  _renkText: string = "Bej";
  _sepeteEkleText: string='Sepete Ekle';

  constructor(page: Page) {
    this._page = page;

    this._bedenOption = page.getByText(this._bedenText, { exact: true });
    this._renkOption = page.getByRole("link", {
      name: "CARGO  Comfort " + this._renkText + "  Pantolon",
      exact: true,
    });
    this._addToCartButton = page.getByRole("button", { name: this._sepeteEkleText });
    this._indirimliFiyat = page.locator("#indirimliFiyat");
  }

  
}

export default ProductDetailsComponent;
