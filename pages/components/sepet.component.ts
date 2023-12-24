import { Page, Locator, expect, FrameLocator } from "@playwright/test";

class SepetComponent {
  _page: Page;
  _frameLocator: FrameLocator;
  _sepetFiyat: string;
  _miktar: string;
  _guncelle: string;
  _miktarGuncelleButton: string;
  _sepetiTemizle: string = "Sepeti Temizle";
  _yesButton: string = "//button[@class='confirm']";
  _emptyBasketText: string = "Sepetinizde ürün bulunmamaktadır.";

  constructor(page: Page) {
    this._page = page;
    this._frameLocator = page.frameLocator(".fancybox-iframe");
    this._sepetFiyat = "//span[@class='sepetItemB3_2']";
    this._miktar = "//input[@class='textbox txtSepetAdet']";
    this._miktarGuncelleButton = "Güncelle";
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

  }

  async getYesButton(){

  }

  async getEmptyBasketText(){
    
  }
}

export default SepetComponent;
