import test, { expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import ErkekPantalonPage from "../pages/erkek.pantalon.page";
import KargoPantalonPage from "../pages/kargo.pantalon.page";

test.describe("Home Page", () => {
  let _homePage: HomePage;
  let _erkekPantalonPage: ErkekPantalonPage;
  let _kargoPantolonPage: KargoPantalonPage;
  test("Open Home Page and verify page", async ({ page }) => {
    //open url

    _homePage = new HomePage(page);

    await _homePage.navigateTo();
    await _homePage.verifyCorrectPage();
    await _homePage._closePopupButton.click();
    await _homePage._resimliMenuComponent._erkekMenu.hover();
    await _homePage._resimliMenuComponent._pantolonOption.click();

    _erkekPantalonPage = new ErkekPantalonPage(page);
    await _erkekPantalonPage.verifyCorrectPage();
    await _erkekPantalonPage._brandListSelectionComponent.sortBrandListSelection(
      "Fiyata Göre (Artan)"
    );

    await _erkekPantalonPage._brandListSelectionComponent.highlightToElement();
    await _erkekPantalonPage._brandListSelectionComponent._filter.click();
    await _erkekPantalonPage._filterComponent._kategori.click();

    _kargoPantolonPage = new KargoPantalonPage(page);
    await _kargoPantolonPage.verifyCorrectPage();
    await _kargoPantolonPage._randomKargoPantalon.click();


    await _kargoPantolonPage._productDetailsComponent._renkOption.click();
    await _kargoPantolonPage._productDetailsComponent._bedenOption.click();

    const fiyat = await _kargoPantolonPage._productDetailsComponent._indirimliFiyat.textContent();
    console.log("Fiyat : " + fiyat);

    await _kargoPantolonPage._productDetailsComponent._addToCartButton.click();

    const sepetFiyat = await page
      .frameLocator(".fancybox-iframe")
      .locator("//span[@class='sepetItemB3_2']")
      .textContent();

    console.log("Sepet Fiyat :" + sepetFiyat);

    expect(fiyat?.trim()).toContain(sepetFiyat?.trim());

    //TODO
    // Ürün adedi 1 arttırılır ve ürün adedinin arttığı kontrol edilir
    // Fiyatın değiştiği kontrol edilir
    const adetInput = page
      .frameLocator(".fancybox-iframe")
      .locator("//input[@class='textbox txtSepetAdet']");
    await adetInput.fill("2");

    const updateCountButton = page
      .frameLocator(".fancybox-iframe")
      .getByRole("link", { name: "Güncelle" });

    await updateCountButton.click();
    await updateCountButton.click();
    //switch frame

    const sepetiTemizleButton = await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepeti Temizle");
    await sepetiTemizleButton.click();

    const yesButton = await page
      .frameLocator(".fancybox-iframe")
      .locator("//button[@class='confirm']");
    await yesButton.click();

    //page.getByRole("button", { name: "Evet",exact:true }).click();
    const sepetiTemizleButton1 = await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepeti Temizle");
    await sepetiTemizleButton1.click();

    const yesButton1 = await page
      .frameLocator(".fancybox-iframe")
      .locator("//button[@class='confirm']");
    await yesButton1.click();

    await expect(
      await page
        .frameLocator(".fancybox-iframe")
        .getByText("Sepetinizde ürün bulunmamaktadır.")
    ).toBeVisible();

    //TODO
    await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepetinizde ürün bulunmamaktadır.")
      .highlight();
  });
});
