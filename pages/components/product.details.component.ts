import { Page, Locator, expect } from "@playwright/test";

class ProductDetailsComponent {
  _page: Page;
  _bedenOption: Locator;
  _renkOption : Locator;
  _addToCartButton: Locator;
  _price:Locator;
  _indirimliFiyat:Locator;

  constructor(page: Page) {
    this._page = page;
    
    this._bedenOption=page.getByText("XXL", { exact: true });
    this._renkOption=page
    .getByRole("link", { name: "CARGO  Comfort Bej  Pantolon", exact: true });
    //this._price=
    this._addToCartButton=page.getByRole("button", { name: "Sepete Ekle" });
    this._indirimliFiyat=page.locator("#indirimliFiyat");
  }

  async verifyPrice(){

  }
}

export default ProductDetailsComponent;
