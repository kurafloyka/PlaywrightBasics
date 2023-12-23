import {Page,Locator, expect} from '@playwright/test'

class HomePage {
  _page: Page;
  closePopupButton: Locator;
  constructor(page:Page) {
    this._page = page;
    this.closePopupButton = page.getByText("×");
  }

  async navigateTo(){
    await this._page.goto("https://www.grimelange.com.tr");
  }

  async verifyCorrectPage(){
    await expect(this._page).toHaveTitle(
      "Grimelange |  Erkek ve Kadın Giyimde Şıklığın Adresi"
    );
  }
}

export default HomePage;

//erkek pantolon sayfasi
//kargo pantalon sayfasi
// brandlistselection component
// resimlimenu component
