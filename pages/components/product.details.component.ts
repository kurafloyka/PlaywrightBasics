import { Page, Locator, expect } from "@playwright/test";
import { Sizes } from "../data/size";
import { Renks } from "../data/renk";

class ProductDetailsComponent {
  private _page: Page;
  private _bedenOption: Locator;
   get bedenOption(): Locator {
    return this._bedenOption;
  }
   set bedenOption(value: Locator) {
    this._bedenOption = value;
  }
  private _renkOption: Locator;
   get renkOption(): Locator {
    return this._renkOption;
  }
   set renkOption(value: Locator) {
    this._renkOption = value;
  }
  private _addToCartButton: Locator;
   get addToCartButton(): Locator {
    return this._addToCartButton;
  }
   set addToCartButton(value: Locator) {
    this._addToCartButton = value;
  }
  private _price: Locator;
   get price(): Locator {
    return this._price;
  }
   set price(value: Locator) {
    this._price = value;
  }
  private _indirimliFiyat: Locator;
   get indirimliFiyat(): Locator {
    return this._indirimliFiyat;
  }
   set indirimliFiyat(value: Locator) {
    this._indirimliFiyat = value;
  }
  private _bedenText: string = Sizes.XXL;
  protected get bedenText(): string {
    return this._bedenText;
  }
  protected set bedenText(value: string) {
    this._bedenText = value;
  }
  private _renkText: string = Renks.Bej;
   get renkText(): string {
    return this._renkText;
  }
   set renkText(value: string) {
    this._renkText = value;
  }
  private _sepeteEkleText: string = 'Sepete Ekle';
   get sepeteEkleText(): string {
    return this._sepeteEkleText;
  }
   set sepeteEkleText(value: string) {
    this._sepeteEkleText = value;
  }

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
