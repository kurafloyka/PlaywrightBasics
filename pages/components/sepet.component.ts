import { Page, Locator, expect, FrameLocator } from "@playwright/test";

class SepetComponent {
  _page: Page;
  _frameLocator: FrameLocator;
  _sepetFiyat: string;
  _miktar: string;
  _guncelle: string;
  _miktarGuncelleButton: string;
  _sepetiTemizle: string ;
  _yesButton: string ;
  _emptyBasketText: string ;

  constructor(page: Page) {
    this._page = page;
    this._frameLocator = page.frameLocator(".fancybox-iframe");
    this._sepetFiyat = "//span[@class='sepetItemB3_2']";
    this._miktar = "//input[@class='textbox txtSepetAdet']";
    this._miktarGuncelleButton = "Güncelle";
    this._sepetiTemizle = "Sepeti Temizle";
    this._yesButton = "//button[@class='confirm']";
    this._emptyBasketText = "Sepetinizde ürün bulunmamaktadır.";
  }

  async getsepetFiyati() {
    return this._frameLocator.locator(this._sepetFiyat).textContent();
  }

  async getAdetInput() {
    return this._frameLocator.locator(this._miktar);
  }

  async getGuncelleButton() {
    return this._frameLocator.getByRole("link", {
      name: this._miktarGuncelleButton,
    });
  }


    async getSepetiTemizle(){
    return this._frameLocator.getByText(this._sepetiTemizle); 
  }

  async getYesButton(){
    return this._frameLocator.locator(this._yesButton);
  }

  async getEmptyBasketText(){
    return this._frameLocator.getByText(this._emptyBasketText);
  }
}

export default SepetComponent;
