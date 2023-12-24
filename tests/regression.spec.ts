import test, { expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import ErkekPantalonPage from "../pages/erkek.pantalon.page";
import KargoPantalonPage from "../pages/kargo.pantalon.page";
import { Sizes } from "../pages/data/size";

test.describe("E2E Testing", () => {
  let _homePage: HomePage;
  let _erkekPantalonPage: ErkekPantalonPage;
  let _kargoPantolonPage: KargoPantalonPage;

  test.beforeEach(async ({ page }) => {
    _homePage = new HomePage(page);
    await _homePage.navigateTo();
    _erkekPantalonPage = new ErkekPantalonPage(page);
    _kargoPantolonPage = new KargoPantalonPage(page);

  })
  
  test("Add To Product In Card and Remove Product", async ({ page }) => {
    

    await _homePage.verifyCorrectPage();
    await _homePage._closePopupButton.click();
    await _homePage._resimliMenuComponent._erkekMenu.hover();
    await _homePage._resimliMenuComponent._pantolonOption.click();
    
    await _erkekPantalonPage.verifyCorrectPage();
    await _erkekPantalonPage._brandListSelectionComponent.sortBrandListSelection();
    await _erkekPantalonPage._brandListSelectionComponent.highlightToElement();
    await _erkekPantalonPage._brandListSelectionComponent._filter.click();
    await _erkekPantalonPage._filterComponent._kategori.click();
    
    await _kargoPantolonPage.verifyCorrectPage();
    await _kargoPantolonPage._randomKargoPantalon.click();
    await _kargoPantolonPage._productDetailsComponent.renkOption.click();
    await _kargoPantolonPage._productDetailsComponent.bedenOption.click();
    const fiyat =
      await _kargoPantolonPage._productDetailsComponent.indirimliFiyat.textContent();
    //console.log("Fiyat : " + fiyat);
    await _kargoPantolonPage._productDetailsComponent.addToCartButton.click();
    const sepetFiyat =
      await _kargoPantolonPage._sepetComponent.getsepetFiyati();
    //console.log("Sepet Fiyat :" + sepetFiyat);
    expect(fiyat?.trim()).toContain(sepetFiyat?.trim());
    //TODO
    // Fiyatın değiştiği kontrol edilir
    const adetInput = await _kargoPantolonPage._sepetComponent.getAdetInput();
    await adetInput.fill("2");
    const updateCountButton =
      await _kargoPantolonPage._sepetComponent.getGuncelleButton();
    await updateCountButton.click();
    await updateCountButton.click();
    const sepetiTemizleButton =
      await _kargoPantolonPage._sepetComponent.getSepetiTemizle();
    await sepetiTemizleButton.click();
    const yesButton = await _kargoPantolonPage._sepetComponent.getYesButton();
    await yesButton.click();
    //TODO
    await sepetiTemizleButton.click();
    await yesButton.click();
    await expect(
      await _kargoPantolonPage._sepetComponent.getEmptyBasketText()
    ).toBeVisible();
    //TODO
    await (
      await _kargoPantolonPage._sepetComponent.getEmptyBasketText()
    ).highlight();
  });

  //pagedata ++?
  //testdata ++?
  //before after ++
  //interface ++
  //basetest ++
  //randomdata with enum
});
